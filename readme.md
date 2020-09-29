# Minification benchmarks

Benchmarks are gathered on the following minifiers:
- [babel-minify](https://github.com/babel/minify)
- [esbuild](https://github.com/evanw/esbuild)
- [google-closure-compiler](https://github.com/google/closure-compiler-npm/tree/master/packages/google-closure-compiler)
- [terser](https://github.com/terser/terser)
- [uglify-js](https://github.com/mishoo/UglifyJS)

## Results

### d3/dist/d3
- **File** `node_modules/d3/dist/d3.js`
- **Size** `503.62 KB`
- **Gzip size** `118.51 KB`

| Minifier                |                    Size |              Gzip size |           Time |
| :---------------------- | ----------------------: | ---------------------: | -------------: |
| babel-minify - default  |  🐥 `240.19 KB` (`47%`) |     `80.38 KB` (`67%`) | 🐢 `6698.69ms` |
| esbuild                 |     `245.26 KB` (`48%`) |     `82.26 KB` (`69%`) |   🐇 `63.93ms` |
| google-closure-compiler | 🐷 `551.11 KB` (`109%`) | 🐷 `115.99 KB` (`97%`) |    `6120.18ms` |
| terser - default        |     `242.96 KB` (`48%`) |     `79.76 KB` (`67%`) |    `2315.47ms` |
| terser - no compress    |      `249.9 KB` (`49%`) |     `80.89 KB` (`68%`) |     `951.43ms` |
| uglify-js - default     |     `241.43 KB` (`47%`) |  🐥 `79.21 KB` (`66%`) |    `3681.56ms` |
| uglify-js - no compress |     `249.56 KB` (`49%`) |     `80.29 KB` (`67%`) |     `591.43ms` |

### jquery
- **File** `node_modules/jquery/dist/jquery.js`
- **Size** `280.89 KB`
- **Gzip size** `82.74 KB`

| Minifier                |                  Size |             Gzip size |           Time |
| :---------------------- | --------------------: | --------------------: | -------------: |
| babel-minify - default  |    `90.23 KB` (`32%`) |    `31.19 KB` (`37%`) |    `2395.65ms` |
| esbuild                 |    `88.51 KB` (`31%`) |    `31.42 KB` (`37%`) |   🐇 `29.78ms` |
| google-closure-compiler |   🐷 `182 KB` (`64%`) | 🐷 `45.26 KB` (`54%`) | 🐢 `3767.62ms` |
| terser - default        |    `88.23 KB` (`31%`) |    `30.49 KB` (`36%`) |     `748.83ms` |
| terser - no compress    |    `92.79 KB` (`33%`) |    `31.15 KB` (`37%`) |     `259.32ms` |
| uglify-js - default     | 🐥 `87.05 KB` (`30%`) | 🐥 `30.29 KB` (`36%`) |    `1171.79ms` |
| uglify-js - no compress |    `92.05 KB` (`32%`) |    `30.84 KB` (`37%`) |     `213.69ms` |

### lodash
- **File** `node_modules/lodash/lodash.js`
- **Size** `529.85 KB`
- **Gzip size** `94.54 KB`

| Minifier                |                   Size |             Gzip size |           Time |
| :---------------------- | ---------------------: | --------------------: | -------------: |
| babel-minify - default  |     `70.25 KB` (`13%`) |    `24.66 KB` (`26%`) |    `1870.56ms` |
| esbuild                 |     `70.22 KB` (`13%`) |    `25.73 KB` (`27%`) |   🐇 `32.81ms` |
| google-closure-compiler | 🐷 `202.54 KB` (`38%`) | 🐷 `39.63 KB` (`41%`) | 🐢 `3631.97ms` |
| terser - default        |     `69.54 KB` (`13%`) |    `24.64 KB` (`26%`) |     `808.68ms` |
| terser - no compress    |     `74.01 KB` (`13%`) |    `25.64 KB` (`27%`) |     `306.08ms` |
| uglify-js - default     |  🐥 `68.31 KB` (`12%`) | 🐥 `24.05 KB` (`25%`) |    `1089.88ms` |
| uglify-js - no compress |     `73.46 KB` (`13%`) |     `25.2 KB` (`26%`) |     `210.61ms` |

### moment
- **File** `node_modules/moment/moment.js`
- **Size** `169.78 KB`
- **Gzip size** `35.69 KB`

| Minifier                |                   Size |             Gzip size |           Time |
| :---------------------- | ---------------------: | --------------------: | -------------: |
| babel-minify - default  |     `57.87 KB` (`34%`) |    `18.34 KB` (`51%`) |    `1239.84ms` |
| esbuild                 |     `58.74 KB` (`34%`) |    `18.96 KB` (`53%`) |   🐇 `21.73ms` |
| google-closure-compiler | 🐷 `134.93 KB` (`79%`) | 🐷 `27.16 KB` (`76%`) | 🐢 `3335.95ms` |
| terser - default        |     `57.84 KB` (`34%`) |    `18.27 KB` (`51%`) |     `434.39ms` |
| terser - no compress    |     `61.82 KB` (`36%`) |    `19.26 KB` (`53%`) |     `169.41ms` |
| uglify-js - default     |  🐥 `57.43 KB` (`33%`) | 🐥 `18.16 KB` (`50%`) |     `668.42ms` |
| uglify-js - no compress |     `61.54 KB` (`36%`) |     `19.1 KB` (`53%`) |     `143.17ms` |

### react/cjs/react.development.js
- **File** `node_modules/react/cjs/react.development.js`
- **Size** `59.22 KB`
- **Gzip size** `16.1 KB`

| Minifier                |                  Size |             Gzip size |           Time |
| :---------------------- | --------------------: | --------------------: | -------------: |
| babel-minify - default  |     `19.4 KB` (`32%`) |     `7.03 KB` (`43%`) |     `299.04ms` |
| esbuild                 |    `19.65 KB` (`33%`) |     `7.18 KB` (`44%`) |   🐇 `13.09ms` |
| google-closure-compiler | 🐷 `58.32 KB` (`98%`) | 🐷 `13.13 KB` (`81%`) | 🐢 `2596.24ms` |
| terser - default        |    `19.12 KB` (`32%`) |     `6.97 KB` (`43%`) |     `199.88ms` |
| terser - no compress    |    `20.71 KB` (`34%`) |     `7.34 KB` (`45%`) |      `63.29ms` |
| uglify-js - default     |  🐥 `18.7 KB` (`31%`) |  🐥 `6.83 KB` (`42%`) |     `239.41ms` |
| uglify-js - no compress |    `20.46 KB` (`34%`) |     `7.15 KB` (`44%`) |      `32.81ms` |

### terser
- **File** `node_modules/terser/dist/bundle.min.js`
- **Size** `835.03 KB`
- **Gzip size** `167.85 KB`

| Minifier                |                   Size |              Gzip size |           Time |
| :---------------------- | ---------------------: | ---------------------: | -------------: |
| babel-minify - default  |              ⚠️ Failed |              ⚠️ Failed |      ⚠️ Failed |
| esbuild                 |    `398.14 KB` (`47%`) |    `114.27 KB` (`68%`) |   🐇 `66.45ms` |
| google-closure-compiler | 🐷 `690.16 KB` (`82%`) | 🐷 `147.77 KB` (`88%`) | 🐢 `6581.96ms` |
| terser - default        | 🐥 `396.16 KB` (`47%`) | 🐥 `111.45 KB` (`66%`) |    `2909.67ms` |
| terser - no compress    |    `409.27 KB` (`49%`) |    `112.18 KB` (`66%`) |    `1279.65ms` |
| uglify-js - default     |              ⚠️ Failed |              ⚠️ Failed |      ⚠️ Failed |
| uglify-js - no compress |              ⚠️ Failed |              ⚠️ Failed |      ⚠️ Failed |

### vue/dist/vue.runtime.common.dev
- **File** `node_modules/vue/dist/vue.runtime.common.dev.js`
- **Size** `217.93 KB`
- **Gzip size** `60.81 KB`

| Minifier                |                   Size |             Gzip size |           Time |
| :---------------------- | ---------------------: | --------------------: | -------------: |
| babel-minify - default  |     `93.04 KB` (`42%`) |    `30.78 KB` (`50%`) |    `2089.50ms` |
| esbuild                 |     `93.13 KB` (`42%`) |    `31.11 KB` (`51%`) |   🐇 `42.08ms` |
| google-closure-compiler | 🐷 `168.18 KB` (`77%`) | 🐷 `41.63 KB` (`68%`) | 🐢 `5138.11ms` |
| terser - default        |     `92.77 KB` (`42%`) |     `30.6 KB` (`50%`) |     `911.94ms` |
| terser - no compress    |     `98.89 KB` (`45%`) |     `31.4 KB` (`51%`) |     `366.57ms` |
| uglify-js - default     |   🐥 `92.2 KB` (`42%`) | 🐥 `30.58 KB` (`50%`) |    `1803.55ms` |
| uglify-js - no compress |     `98.68 KB` (`45%`) |     `31.4 KB` (`51%`) |     `516.39ms` |

