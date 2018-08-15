import React from 'react';

import './Input.css';

const Input = props => {
    let inputElement = null;
    let invalidMessage = null;

    //Create input elements according to type
    switch(props.inputType) {
        case ('input'):
            inputElement = 
                <input 
                    type={props.type} 
                    name={props.name} 
                    id={props.id} 
                    placeholder={props.placeholder} required={props.required} 
                    value={props.value} 
                    onChange={props.changed} 
                    /* disabled={props.type === 'submit' ? !props.formIsValid: null} */
                    defaultChecked={props.type === 'checkbox' ? props.checked : null} 
                    onClick={props.type === 'submit' ? props.clicked : null}
                />;
            
            if(props.type === 'submit' && props.formIsValid === false && props.touched === true) {
                invalidMessage = <span className="invalidMessage">{props.invalidMessage}</span>
            } else {
                invalidMessage = !props.valueIsValid && props.touched ? <div className="invalidMessage">{props.invalidMessage}</div> : null;
            }

            break;
        case ('textarea'):
            inputElement = 
                <textarea 
                    name={props.name} 
                    placeholder={props.placeholder} 
                    required={props.required} 
            
                    id={props.id} 
                    onChange={props.changed} 
                    value={props.value}
                />;
            
            invalidMessage = !props.valueIsValid && props.touched ? <div className="invalidMessage">{props.invalidMessage}</div> : null;
            
            break;
        case ('select'):
            let optionList = [];
            for(let option in props.options) {
                optionList.push((
                    <option 
                        key={option} 
                        value={props.options[option].value}
                        >
                        {props.options[option].description}
                    </option>
                ));
            }
            
            inputElement = 
                <select 
                    name={props.label} 
                    value={props.value} 
                    onChange={props.changed}>
                    {optionList} 
                </select>;
            
                break;
        default:
            inputElement = null;
    }
    
    return (
        <div className="row">
            <div className="col span-1-of-3">
                <label htmlFor={props.name}>{props.label}</label>
            </div>
            <div className="col span-2-of-3">
                {inputElement}
                {props.textAfter ?props.textAfter : null}
                {invalidMessage}
            </div>
        </div>
    );
}

export default Input;