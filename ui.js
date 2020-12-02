"use strict";
const React = require("react");
const { Text, Box, Newline, useInput, useApp } = require("ink");
const importJsx = require("import-jsx");
const path = require("path");
const runScript = require("./actions/runScript");

//import package.json
let packageScripts;
try {
	packageScripts = require(path.join(process.cwd(), "package.json")).scripts;
} catch (e) {
	console.log("No package json");
	packageScripts = {};
}

// import components
const NpmList = importJsx("./components/npmList.js");

// import custom hooks
const useNpmScript = require("./components/useNpmScript");

const App = () => {
	const { exit } = useApp();
	const [currScript, setScript] = useNpmScript("");

	if (Object.keys(packageScripts).length === 0) {
		return <Text>No scripts</Text>;
	}

	useInput((input, key) => {
		if (input === "q") {
			// Exit program
			exit();
		}

		if (key.return && currScript) {
			// Left arrow key pressed

			runScript(currScript);
			exit();
		}
	});

	return (
		<Box flexDirection="column">
			<Box justifyContent="center" borderStyle="doubleSingle">
				<Text bold>Select a NPM script</Text>
				<Text>{process.cwd()}</Text>
			</Box>
			<NpmList scripts={packageScripts} handleFocus={setScript} />
		</Box>
	);
};

module.exports = App;
