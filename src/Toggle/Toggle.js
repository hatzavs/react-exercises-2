import React, { useState } from 'react';
import logo from './logo.svg';
import './Toggle.scss';

function Toggle() {
	const [isShown, setShown] = useState(true);

	function hide() {
		setShown(!isShown);
	}

	return (
		<div className="Toggle">
			<p>Make the logo show and disappear when clicking on the button.</p>
			<button onClick={hide}>Show / Hide</button>
			<div className="Toggle__logo-wrapper">
				{isShown && <img src={logo} alt="logo" />}
			</div>
		</div>
	)
}

export default Toggle;
