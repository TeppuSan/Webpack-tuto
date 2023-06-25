module.exports = {
    //エントリーポイント
    //エントリーポイントとは、webpackがビルドを始める際の起点となるファイルのことです。
    entry: './src/index.js',

    //出力先
    output: {
        //出力先のパスを決定
        path: `${__dirname}/dist`,
        //出力先のファイル名を決定
        filename: 'bundle.js'

    },
    mode: 'development',

    //ローカルサーバの設定
    devServer: {
        static: "./dist",
        open: true
    },

};