import React, { useState } from 'react';
import styles from './Button.module.css';
import UnorderedList from '../UnorderedList/UnorderedList.jsx';

function Button(props) {

    return (
        <button
            className={styles[props.buttonStyle]}
            style={{ order: props.order }}
            onClick={props.click}
        >
            <img
                className={styles[props.imageStyle]}
                src={props.image}
            />
        </button>
    );

}

export default Button;