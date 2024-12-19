import clear from 'rollup-plugin-clear';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import screeps from 'rollup-plugin-screeps';
import fs from 'fs';

const upload = process.env.UPLOAD;
const config = JSON.parse(fs.readFileSync('screeps.json', 'utf8'));
const destConfig = upload ? config[upload] : null;

export default {
    input: "src/main.ts",
    output: {
        file: "dist/main.js",
        format: "cjs",
        sourcemap: true,
        // sourceMapFile: "dist/main.js.map"
    },

    plugins: [
        clear({ targets: ["dist"] }),
        resolve({ rootDir: "src" }),
        commonjs(),
        typescript({ tsconfig: "./tsconfig.json" }),
        screeps({ config: destConfig})
    ]
}