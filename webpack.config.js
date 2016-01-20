module.exports = {
	context: __dirname + "/src",
	entry: __dirname + "/index.js",
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				//tell webpack to use jsx-loader for all *.jsx files
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				query: {
					presets: ["es2015"]
				}
			}
		]
	}
};
