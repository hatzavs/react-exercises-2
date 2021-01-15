import React from 'react';

function Colorize(props) {
    return (
        <div style={{color:props.color}}>
            {props.color}
        </div>
    );
}

export default Colorize;