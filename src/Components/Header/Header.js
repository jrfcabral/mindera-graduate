import React from 'react';
import PropTypes from 'prop-types'
import "./Header.css";
import "../../palette.css"
const header = (props) => {
    return (
        <header className="default-primary-color text-primary-color">
            <button>
            <i className="material-icons">{props.leftIcon}</i>
            </button>
            <h1>{props.title}</h1>
            {props.rightIcon ? 
            <button>
            <i className="material-icons">{props.rightIcon}</i>
            </button> : null}
        </header>
    );
}

header.propTypes = {
    leftIcon: PropTypes.string.isRequired,
    rightIcon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default header;