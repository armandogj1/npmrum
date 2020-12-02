const { useState } = require("react");

const useComponentInFocus = () => {
	const [currentFocused, setFocus] = useState("");

	return [currentFocused, setFocus];
};

module.exports = useComponentInFocus;
