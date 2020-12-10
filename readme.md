# Minification benchmarks

Benchmarks are gathered on the following minifiers:
<!-- minifiersList:start -->
- [babel-minify](https://github.com/babel/minify)
- [esbuild](https://github.com/evanw/esbuild)
- [terser](https://github.com/terser/terser)
- [uglify-js](https://github.com/mishoo/UglifyJS)
<!-- minifiersList:end -->

## Results
<!-- results:start -->
### d3/dist/d3
- **File** `node_modules/d3/dist/d3.js`
- **Size** `503.62 KB`
- **Gzip size** `118.51 KB`

| Minifier                |                   Size |             Gzip size |           Time |
| :---------------------- | ---------------------: | --------------------: | -------------: |
| babel-minify - default  | 🐥 `240.19 KB` (`47%`) |    `80.38 KB` (`67%`) | 🐢 `6202.10ms` |
| esbuild                 |              ⚠️ Failed |             ⚠️ Failed |      ⚠️ Failed |
| terser - default        |    `242.96 KB` (`48%`) |    `79.76 KB` (`67%`) |    `1928.78ms` |
| terser - no compress    |  🐷 `249.9 KB` (`49%`) | 🐷 `80.89 KB` (`68%`) |     `801.75ms` |
| uglify-js - default     |    `240.87 KB` (`47%`) | 🐥 `78.87 KB` (`66%`) |    `3654.54ms` |
| uglify-js - no compress |    `249.56 KB` (`49%`) |    `80.29 KB` (`67%`) |  🐇 `557.37ms` |

### jquery
- **File** `node_modules/jquery/dist/jquery.js`
- **Size** `280.89 KB`
- **Gzip size** `82.74 KB`

| Minifier                |                  Size |             Gzip size |           Time |
| :---------------------- | --------------------: | --------------------: | -------------: |
| babel-minify - default  |    `90.23 KB` (`32%`) | 🐷 `31.19 KB` (`37%`) | 🐢 `2005.91ms` |
| esbuild                 |             ⚠️ Failed |             ⚠️ Failed |      ⚠️ Failed |
| terser - default        |    `88.23 KB` (`31%`) |    `30.49 KB` (`36%`) |     `660.32ms` |
| terser - no compress    | 🐷 `92.79 KB` (`33%`) |    `31.15 KB` (`37%`) |     `233.01ms` |
| uglify-js - default     |  🐥 `86.8 KB` (`30%`) | 🐥 `30.25 KB` (`36%`) |    `1152.10ms` |
| uglify-js - no compress |    `92.05 KB` (`32%`) |    `30.84 KB` (`37%`) |  🐇 `194.31ms` |

### lodash
- **File** `node_modules/lodash/lodash.js`
- **Size** `529.85 KB`
- **Gzip size** `94.54 KB`

| Minifier                |                  Size |             Gzip size |           Time |
| :---------------------- | --------------------: | --------------------: | -------------: |
| babel-minify - default  |    `70.25 KB` (`13%`) |    `24.66 KB` (`26%`) | 🐢 `1652.34ms` |
| esbuild                 |             ⚠️ Failed |             ⚠️ Failed |      ⚠️ Failed |
| terser - default        |    `69.54 KB` (`13%`) |    `24.64 KB` (`26%`) |     `597.98ms` |
| terser - no compress    | 🐷 `74.01 KB` (`13%`) | 🐷 `25.64 KB` (`27%`) |     `251.87ms` |
| uglify-js - default     | 🐥 `67.89 KB` (`12%`) |  🐥 `23.9 KB` (`25%`) |    `1066.43ms` |
| uglify-js - no compress |    `73.46 KB` (`13%`) |     `25.2 KB` (`26%`) |  🐇 `197.17ms` |

### moment
- **File** `node_modules/moment/moment.js`
- **Size** `169.78 KB`
- **Gzip size** `35.69 KB`

| Minifier                |                  Size |             Gzip size |           Time |
| :---------------------- | --------------------: | --------------------: | -------------: |
| babel-minify - default  |    `57.87 KB` (`34%`) |    `18.34 KB` (`51%`) | 🐢 `1038.22ms` |
| esbuild                 |             ⚠️ Failed |             ⚠️ Failed |      ⚠️ Failed |
| terser - default        |    `57.84 KB` (`34%`) |    `18.27 KB` (`51%`) |     `402.52ms` |
| terser - no compress    | 🐷 `61.82 KB` (`36%`) | 🐷 `19.26 KB` (`53%`) |     `141.59ms` |
| uglify-js - default     | 🐥 `56.99 KB` (`33%`) |  🐥 `18.1 KB` (`50%`) |     `696.51ms` |
| uglify-js - no compress |    `61.54 KB` (`36%`) |     `19.1 KB` (`53%`) |  🐇 `117.90ms` |

### react/cjs/react.development.js
- **File** `node_modules/react/cjs/react.development.js`
- **Size** `59.22 KB`
- **Gzip size** `16.1 KB`

| Minifier                |                  Size |            Gzip size |          Time |
| :---------------------- | --------------------: | -------------------: | ------------: |
| babel-minify - default  |     `19.4 KB` (`32%`) |    `7.03 KB` (`43%`) | 🐢 `260.85ms` |
| esbuild                 |             ⚠️ Failed |            ⚠️ Failed |     ⚠️ Failed |
| terser - default        |    `19.12 KB` (`32%`) |    `6.97 KB` (`43%`) |     `99.51ms` |
| terser - no compress    | 🐷 `20.71 KB` (`34%`) | 🐷 `7.34 KB` (`45%`) |     `35.24ms` |
| uglify-js - default     | 🐥 `18.63 KB` (`31%`) | 🐥 `6.78 KB` (`42%`) |    `233.65ms` |
| uglify-js - no compress |    `20.46 KB` (`34%`) |    `7.15 KB` (`44%`) |  🐇 `30.00ms` |

### terser
- **File** `node_modules/terser/dist/bundle.min.js`
- **Size** `840.1 KB`
- **Gzip size** `169.08 KB`

| Minifier                |                   Size |              Gzip size |           Time |
| :---------------------- | ---------------------: | ---------------------: | -------------: |
| babel-minify - default  |              ⚠️ Failed |              ⚠️ Failed |      ⚠️ Failed |
| esbuild                 |              ⚠️ Failed |              ⚠️ Failed |      ⚠️ Failed |
| terser - default        | 🐥 `397.63 KB` (`47%`) | 🐥 `111.88 KB` (`66%`) | 🐢 `1648.29ms` |
| terser - no compress    | 🐷 `410.97 KB` (`48%`) | 🐷 `112.64 KB` (`66%`) |  🐇 `662.96ms` |
| uglify-js - default     |              ⚠️ Failed |              ⚠️ Failed |      ⚠️ Failed |
| uglify-js - no compress |              ⚠️ Failed |              ⚠️ Failed |      ⚠️ Failed |

### vue/dist/vue.runtime.common.dev
- **File** `node_modules/vue/dist/vue.runtime.common.dev.js`
- **Size** `217.93 KB`
- **Gzip size** `60.81 KB`

| Minifier                |                  Size |             Gzip size |           Time |
| :---------------------- | --------------------: | --------------------: | -------------: |
| babel-minify - default  |    `93.04 KB` (`42%`) |    `30.78 KB` (`50%`) | 🐢 `1158.44ms` |
| esbuild                 |             ⚠️ Failed |             ⚠️ Failed |      ⚠️ Failed |
| terser - default        |    `92.77 KB` (`42%`) |     `30.6 KB` (`50%`) |     `382.48ms` |
| terser - no compress    | 🐷 `98.89 KB` (`45%`) |     `31.4 KB` (`51%`) |     `179.78ms` |
| uglify-js - default     | 🐥 `92.03 KB` (`42%`) | 🐥 `30.46 KB` (`50%`) |     `904.18ms` |
| uglify-js - no compress |    `98.68 KB` (`45%`) |  🐷 `31.4 KB` (`51%`) |  🐇 `157.44ms` |


<!-- results:end -->

