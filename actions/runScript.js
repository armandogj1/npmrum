const { spawn } = require("child_process");

const runScript = (scriptName) => {
	const npm = spawn("npm", ["run", scriptName], {
		detached: false,
		shell: true,
		stdio: "inherit",
	});

	// npm.stdout.on("data", (data) => {
	// 	console.log(`stdout: ${data}`);
	// });

	// npm.stderr.on("data", (data) => {
	// 	console.error(`stderr: ${data}`);
	// });

	npm.on("close", (code) => {
		console.log(`child process exited with code ${code}`);
	});
};

module.exports = runScript;
