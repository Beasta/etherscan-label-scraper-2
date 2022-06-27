import builtins from "rollup-plugin-node-builtins"
import resolve from "rollup-plugin-node-resolve"

export default {
    input: "src/index.cjs",
    output: [
        {
            file: "lib/etherscan-label-scraper-2.es.js",
            format: "es"
        },
        {
            file: "lib/etherscan-label-scraper-2.cjs.js",
            format: "cjs"
        }
    ],
    plugins: [builtins(), resolve()],
    external: []
}
