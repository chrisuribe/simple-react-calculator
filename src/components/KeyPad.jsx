import React from 'react';

const KeyPad = (props) => {
    return (
        <div>
            <button name="AC"  onClick={event => props.onClick(event.target.name)}>AC</button>
            <button name="+/-" onClick={event => props.onClick(event.target.name)}>+/-</button>
            <button name="%"   onClick={event => props.onClick(event.target.name)}>%</button>
            <button name="/"   onClick={event => props.onClick(event.target.name)}>/</button><br />

            <button name="7"   onClick={event => props.onClick(event.target.name)}>7</button>
            <button name="8"   onClick={event => props.onClick(event.target.name)}>8</button>
            <button name="9"   onClick={event => props.onClick(event.target.name)}>9</button>
            <button name="*"   onClick={event => props.onClick(event.target.name)}>X</button><br />

            <button name="4"   onClick={event => props.onClick(event.target.name)}>4</button>
            <button name="5"   onClick={event => props.onClick(event.target.name)}>5</button>
            <button name="6"   onClick={event => props.onClick(event.target.name)}>6</button>
            <button name="-"   onClick={event => props.onClick(event.target.name)}>-</button><br />

            <button name="1"   onClick={event => props.onClick(event.target.name)}>1</button>
            <button name="2"   onClick={event => props.onClick(event.target.name)}>2</button>
            <button name="3"   onClick={event => props.onClick(event.target.name)}>3</button>
            <button name="+"   onClick={event => props.onClick(event.target.name)}>+</button><br />

            <button name="0"   onClick={event => props.onClick(event.target.name)}>0</button>
            <button name="."   onClick={event => props.onClick(event.target.name)}>.</button>
            <button name="="   onClick={event => props.onClick(event.target.name)}>=</button>
        </div>
    );
};

export default KeyPad;