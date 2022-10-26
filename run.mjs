import esbuild from "esbuild";
import { readFileSync } from "fs";
import { spawn } from "child_process";

await esbuild.build({
    outfile: "dist/index.js",
    entryPoints: ["index.jsx"],
    inject: ["runtime/JsxML.js"],
    jsxFactory: "jsxML",
    footer: {
        js: readFileSync("runtime/footer.txt", "utf-8")
    },
    banner: {
        js: readFileSync("runtime/banner.txt", "utf-8")
    }
});

await spawn(process.argv[0], ["dist/index.js"], {
    stdio: "inherit"
});