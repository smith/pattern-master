/**
 * The starting point for Pintura running in Node.
 */

// first we add all the necessary paths to require.paths
var packagesRoot = process.env.NARWHAL_HOME || "/opt/narwhal/",
    packagePaths = [""] // start with the current directory
			.concat([ // now add alll the packages
				"packages/pintura/",
				"packages/pintura/engines/node/",
				"packages/pintura/engines/default/",
				"packages/perstore/",
				"packages/perstore/engines/node/",
				"packages/perstore/engines/default/",
				"packages/commonjs-utils/",
				"packages/jack/",
				"packages/jsgi-node/",
				"engines/default/",
				""
				].map(function (path) {
                    // for each package, start in the right directory
					return packagesRoot + path;
			    })
        );

require.paths.push.apply(require.paths, packagePaths.map(function (path){
	return path + "lib";
}));

require("node-commonjs");

var pintura = require("pintura");

require("app");

require("jsgi-node").start(
    // cascade from static to pintura REST handling
	require("jsgi/cascade").Cascade([
		// the main place for static files accessible from the web
		require("jsgi/static").Static({urls:[""],roots:["public"]}),
		// this will provide access to the server side JS libraries from the
        // client
		require("jsgi/static").Static({urls:["/lib"],roots:packagePaths}),
        require("jsgi/redirect-root").RedirectRoot(
			// main pintura app
			pintura.app
		)
    ])
);

// having a REPL is really helpful
require("repl").start();
