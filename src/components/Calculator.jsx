import React, {useState} from 'react';
import Display from './Display';
import KeyPad from './KeyPad';

function Calculator(props) {
    const [displayStorage, setDisplayStorage] = useState(" "); 

    function onClick(buttonName) {
        //console.log("The " + buttonName + " was pressed!");
        if( buttonName === "AC")
            allClearDisplay();
        else if(buttonName === "=")
            evaluate();
        else
            addButtonToEquation(buttonName); 
    }
    
    function allClearDisplay() {
        setDisplayStorage("");
    }
    
    function evaluate() {
        try {
            setDisplayStorage(eval(displayStorage));
        } catch (e) {
            setDisplayStorage("error");
        }
    }
    
    function addButtonToEquation(buttonName) {
        setDisplayStorage(displayStorage + buttonName);
    }
    
    return (
        <div> 
            <Display displayText={displayStorage}/>
            <KeyPad onClick={onClick}/>
        </div>
    );
}

export default Calculator;


