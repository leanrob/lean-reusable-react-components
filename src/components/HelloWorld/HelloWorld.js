import React from 'react';
import PropTypes from 'prop-types';

function HelloWorld({message}) {
	return <div>Hello {message}</div>
}

HelloWorld.propTypes = {
	/** This is a sample description. */
	message: PropTypes.string.isRequired
};

HelloWorld.defaultProps = {
	message: "a default massage",
};

export default HelloWorld;