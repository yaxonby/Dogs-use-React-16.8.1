const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
	entry: { main: './src/index.js' },
   output: {
     path: path.resolve(__dirname, 'dist'),
		 chunkFilename: '[name].bundle.js',
     filename: 'main.js'
   },
  module: {
		/*
		preLoaders: [ //добавили ESlint в preloaders
		 {
			 test: /\.js$/,
			 loaders: ['eslint'],
			 include: [
				 path.resolve(__dirname, "src"),
			 ],
		 }
	 ],

	 loaders: [ //все остальное осталось не тронутым
	       {
	         loaders: ['react-hot', 'babel-loader'],
	         include: [
	           path.resolve(__dirname, "src"),
	         ],
	         test: /\.js$/,
	         plugins: ['transform-runtime'],
	       }
	     ],
*/
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },

			{
			      test: /\.js$/,
			      exclude: /node_modules/,
			      use: ['babel-loader', 'eslint-loader']
			    },

      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
			{
			  test: /\.css$/,
			        use: ExtractTextPlugin.extract({
			          fallback: "style-loader",
			          use:  ['css-loader']
			})
		}
//		,
//		{
//        test: /\.scss$/,
//        use: ExtractTextPlugin.extract(
//          {
//            fallback: 'style-loader',
//            use: ['css-loader', 'sass-loader']
//          })
//      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
		new ExtractTextPlugin(
		      {filename: 'style.css'}
		    )
  ]
};




/*
// Webpack v4
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const WebpackMd5Hash = require('webpack-md5-hash');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
let conf={
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, './dist'),
  //  filename: '[name].[chunkhash].js'
	    filename: 'main.js',
      publicPath: "/dist/"
  },
//	devServer: {
//		overlay:true
//	},
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
	//				options: {
  //        presets: ['@babel/preset-env', "@babel/preset-react"],
  //        plugins: ['@babel/plugin-proposal-object-rest-spread']
  //      }

        }
      },

			{
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },

			{
			  test: /\.scss$/,
			        use: ExtractTextPlugin.extract({
			          fallback: "style-loader",
			          use:  [  'style-loader',	'css-loader', 'postcss-loader', 'sass-loader']
			})
		}
    ]
  },
  plugins: [
//    new CleanWebpackPlugin('dist', {} ),
//    new MiniCssExtractPlugin({
//      filename: 'style.[contenthash].css',
//    }),
new ExtractTextPlugin(
      {filename: 'style.css'}
    ),
		new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
//		,
//    new HtmlWebpackPlugin({
//      inject: false,
//      hash: true,
//      template: './src/index.html',
//      filename: 'index.html'
//    })
		//,
  //  new WebpackMd5Hash()
],
devtool: "eval-sourcemap"
};

module.exports=(env, options)=> {
let production =options.mode==="production";
conf.devtool=production
             ? "source-map"
             : "eval-sourcemap";

  return conf;}
	*/
