const React = require("react");
const { Text, Box, useFocus } = require("ink");
const useNpmScript = require("./useNpmScript");

const NpmScript = ({ scriptName, handleFocus }) => {
	const { isFocused } = useFocus();

	const scriptRenderer = () => {
		if (isFocused) {
			handleFocus(scriptName);
			return (
				<Text inverse color="cyan">
					{scriptName}
				</Text>
			);
		}

		return <Text>{scriptName}</Text>;
	};

	return <Box>{scriptRenderer()}</Box>;
};

module.exports = NpmScript;
