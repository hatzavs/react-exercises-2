import React, { useState } from 'react';
import './RealNumber.scss';

function RealNumber() {
	const [value, setValue] = useState('');

	function myInput(e) {
		setValue(e.target.value);
	}

	return (
		<div className="RealNumber">
			<p>
				The button near the input should be visible only if the input contains <u>only</u> numbers.
				Examples:<br />
				"238764" - <span className="value--valid">valid</span> <br />
				"A13" - <span className="value--invalid">invalid</span>
			</p>

			<input type="text" className="text-box" value={value} onChange={myInput}/>
			{!isNaN(value) && <button>Submit</button>}
		</div>
	)
}

export default RealNumber;
