'use strict'

import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import image from '@rollup/plugin-image'
import nodePolyfills from 'rollup-plugin-node-polyfills'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import replace from '@rollup/plugin-replace'

export default {
    input: 'src/main.jsx',
    output: {
        dir: 'dist/assets',
        format: 'es',
        entryFileNames: '[name].[hash].js',
        chunkFileNames: '[name].[hash].js',
        assetFileNames: '[name].[hash][extname]'
    },
    plugins: [
        // Fix issue with importing react
        // https://stackoverflow.com/a/61237702
        replace({
            preventAssignment: true,
            'process.env.NODE_ENV': 'development',
        }),
        nodeResolve({
            extensions: ['.js', '.jsx'],
            preferBuiltins: false,
            browser: true
        }),
        nodePolyfills(),
        commonjs({
            include: /node_modules/,
            transformMixedEsModules: true,
        }),
        babel({
            presets: ['@babel/preset-react'],
            extensions: ['.js', '.jsx'],
            babelHelpers: 'bundled'
        }),
        image(),
        postcss(),
    ]
}
