import pkg from "./package.json";
import tsconfig from "./tsconfig.json";
import typescript from "rollup-plugin-typescript2";
import vue from "rollup-plugin-vue";

// import buble from 'rollup-plugin-buble'
// import babel from "rollup-plugin-babel";

// Resolver
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

// Post 
import uglify from "rollup-plugin-uglify";
// import autoprefixer from "autoprefixer";

// Dev
import livereload from "rollup-plugin-livereload";
import serve from "rollup-plugin-serve";

//
// Configs
//
const plugins = [
    typescript({
		tsconfigOverride: {
			compilerOptions: {
				declaration: false,
			}
		}
	}),
    vue({
        css: pkg.browser + ".css",
        disableCssModuleStaticReplacement: false,
        compileTemplate: true,
        typescript: tsconfig
    }),
    // buble({ exclude: 'node_modules/**' }),
    // babel({
    //     plugins: [
    //         "transform-decorators-legacy",
    //         "transform-class-properties"
    //     ]
    // }),
    resolve({
        browser: true,
        jsnext: true
    }),
    commonjs()
]

if (process.env.NODE_ENV === "production") {
    plugins.push(uglify())
}

if (process.env.NODE_ENV === "development") {
    plugins.push(livereload())
    plugins.push(serve({
        open: true,
        verbose: true,
        contentBase: ["./", "dist"]
    }))
}

export default [
    // browser-friendly UMD build
    {
        input: "src/main.ts",
        output: {
            name: "sico",
            file: pkg.browser,
            format: "umd",
            sourcemap: false,
            globals: {
                jquery: "$",
                vue: "Vue"
            }
        },
        external: ["vue"],
        plugins
    },
    // CommonJS (for Node) and ES module (for bundlers) build.
	// {
	// 	input: "src/main.ts",
	// 	external: ["ms"],
	// 	output: [
	// 		{
	// 			format: "cjs",
	// 			file: pkg.main,
	// 		},
	// 		{
	// 			format: "es",
	// 			file: pkg.module,
	// 		}
	// 	]
	// }
];