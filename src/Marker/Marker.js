import React, { useState } from 'react';
import './Marker.scss';
import ReactHtmlParser from 'react-html-parser'; 
import MarkText from './MarkText/MarkText';

function Marker() {

	const [items, setItems] = useState([
		"First item",
		"Second special item",
		"Third item",
		"Fourth special item",
	]);
	const [value, setValue]= useState('');

	function myInput(e) {
		setValue(e.target.value);
		setItems(items);
	}

	return (
		<div className="Marker">
			<p>
				Display a list of all items in the state.<br />
				If the value in the input can be found within the items - <span className="marker">marker</span> it.<br />
				Example: if the input value is "elf" then item "shelf" should look like: sh<span className="marker">elf</span>.
				Apply the marker for <u>all items</u>.
			</p>

			<input type="text" placeholder="Text to marker..." value={value} onChange={myInput}/>
			<ul>
				{items.map((item, index) => {
					return (<li key={index}>
						<MarkText item={item} value={value}/>
					</li>);
				})}
			</ul>
		</div>
	)
}

export default Marker;
