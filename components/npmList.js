const React = require("react");
const importJsx = require("import-jsx");
const { Box } = require("ink");
const NpmScript = importJsx("./npmScript.js");

const NpmList = ({ scripts, handleFocus }) => {
	return (
		<Box flexDirection="column">
			{Object.keys(scripts).map((script) => (
				<NpmScript key={script} scriptName={script} handleFocus={handleFocus} />
			))}
		</Box>
	);
};

module.exports = NpmList;
