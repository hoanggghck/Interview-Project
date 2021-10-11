var webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './webpack.entry.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/assets/dist'
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        hmr: process.env.NODE_ENV === 'development'
                    }
                }, {
                    loader: 'css-loader', // translates CSS into CommonJS modules
                }, {
                    loader: 'postcss-loader', // Run postcss actions
                    options: {
                        plugins: function () { // postcss plugins, can be exported to postcss.config.js
                            return [
                                require('autoprefixer')
                            ];
                        }
                    }
                }, {
                    loader: 'sass-loader' // compiles Sass to CSS
                }]
            }, {
                test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default'],
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css',
        }),
    ],
    watch: true,
    mode: 'production'
}