/**
 * MD3 动态配色（Material You 壁纸取色）
 * 从页面 og:image（特色图像/首页图）提取主色调作为种子色，
 * 写入 --mdx-md3-seed 与 --mdx-theme-color，失败时保持后台设置的种子色。
 * 仅在后台同时开启 mdx_md3 与 mdx_md3_dynamic 时加载。
 */
(function () {
    'use strict';

    var meta = document.querySelector('meta[property="og:image"]');
    if (!meta) {
        return;
    }
    var url = meta.getAttribute('content');
    if (!url) {
        return;
    }

    var img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = function () {
        try {
            var size = 64;
            var canvas = document.createElement('canvas');
            canvas.width = size;
            canvas.height = size;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, size, size);
            var data = ctx.getImageData(0, 0, size, size).data;

            // 12 个色相桶，按饱和度加权投票，选出最有表现力的色相桶
            var buckets = [];
            var i;
            for (i = 0; i < 12; i++) {
                buckets.push({ w: 0, r: 0, g: 0, b: 0 });
            }
            for (i = 0; i < data.length; i += 4) {
                var r = data[i] / 255, g = data[i + 1] / 255, b = data[i + 2] / 255;
                var max = Math.max(r, g, b), min = Math.min(r, g, b);
                var l = (max + min) / 2;
                if (l < 0.12 || l > 0.92) {
                    continue;
                }
                var d = max - min;
                var s = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1));
                if (s < 0.18) {
                    continue;
                }
                var h;
                if (d === 0) {
                    h = 0;
                } else if (max === r) {
                    h = ((g - b) / d) % 6;
                } else if (max === g) {
                    h = (b - r) / d + 2;
                } else {
                    h = (r - g) / d + 4;
                }
                h = (h * 60 + 360) % 360;
                var bucket = buckets[Math.floor(h / 30) % 12];
                var w = s * (1 - Math.abs(l - 0.5));
                bucket.w += w;
                bucket.r += r * w;
                bucket.g += g * w;
                bucket.b += b * w;
            }
            var best = null;
            for (i = 0; i < 12; i++) {
                if (buckets[i].w > 0 && (!best || buckets[i].w > best.w)) {
                    best = buckets[i];
                }
            }
            if (!best) {
                return;
            }
            var R = Math.round(best.r / best.w * 255);
            var G = Math.round(best.g / best.w * 255);
            var B = Math.round(best.b / best.w * 255);

            // 把亮度压到 MD3 tone 40 附近，避免过亮/过暗
            var hsl = rgbToHsl(R, G, B);
            hsl[2] = Math.min(0.55, Math.max(0.3, hsl[2]));
            hsl[1] = Math.min(0.85, Math.max(0.35, hsl[1]));
            var rgb = hslToRgb(hsl[0], hsl[1], hsl[2]);

            var hex = '#' + toHex(rgb[0]) + toHex(rgb[1]) + toHex(rgb[2]);
            // 取到的颜色偏亮时用深色文字，偏暗时用白色文字
            var onPrimary = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) > 150 ? '#1d1b20' : '#ffffff';
            document.documentElement.style.setProperty('--mdx-md3-seed', hex);
            document.documentElement.style.setProperty('--mdx-md3-on-primary', onPrimary);
            document.body.style.setProperty('--mdx-theme-color', rgb[0] + ',' + rgb[1] + ',' + rgb[2], 'important');
            document.body.style.setProperty('--mdx-theme-color-with-white', rgb[0] + ',' + rgb[1] + ',' + rgb[2], 'important');
        } catch (e) {
            // 跨域画布污染等情况：静默回退到后台种子色
        }
    };
    img.onerror = function () {};
    img.src = url;

    function toHex(v) {
        return ('0' + v.toString(16)).slice(-2);
    }

    function rgbToHsl(r, g, b) {
        r /= 255; g /= 255; b /= 255;
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var l = (max + min) / 2;
        var d = max - min;
        var s = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1));
        var h = 0;
        if (d !== 0) {
            if (max === r) {
                h = ((g - b) / d) % 6;
            } else if (max === g) {
                h = (b - r) / d + 2;
            } else {
                h = (r - g) / d + 4;
            }
            h = (h * 60 + 360) % 360;
        }
        return [h, s, l];
    }

    function hslToRgb(h, s, l) {
        var c = (1 - Math.abs(2 * l - 1)) * s;
        var x = c * (1 - Math.abs((h / 60) % 2 - 1));
        var m = l - c / 2;
        var p;
        if (h < 60) { p = [c, x, 0]; }
        else if (h < 120) { p = [x, c, 0]; }
        else if (h < 180) { p = [0, c, x]; }
        else if (h < 240) { p = [0, x, c]; }
        else if (h < 300) { p = [x, 0, c]; }
        else { p = [c, 0, x]; }
        return [
            Math.round((p[0] + m) * 255),
            Math.round((p[1] + m) * 255),
            Math.round((p[2] + m) * 255)
        ];
    }
})();
