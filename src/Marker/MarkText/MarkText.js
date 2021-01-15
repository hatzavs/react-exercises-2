import React, { useEffect } from 'react';

function MarkText(props) {
    const valueIndex = props.item.indexOf(props.value);
    const itemArr = props.item.split('');
    let first = itemArr.slice(0,valueIndex).join('');
    let last = itemArr.slice(valueIndex + props.value.length).join('');
    if (valueIndex < 0) {
        first = props.item;
        last = '';
    }

    return (
        <div>
            <span>{first}</span>
            { valueIndex >= 0 && <span style={{background:"yellow"}}>{props.value}</span> }
            <span>{last}</span>
        </div>
    );
}

export default MarkText;