import { exec, execSync } from "child_process";
execSync("quickjs-emscripten-cli test.js", (err, stdout, stderr) => {
  console.log({ stdout, stderr, err })
})