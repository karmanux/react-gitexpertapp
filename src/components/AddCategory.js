import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories}) => {

    const [inputValue, setinputValue] = useState('');

    const handlerInputChange = (e) => {
        setinputValue(e.target.value);
    }

    const handlerSubmit = (e) => {
        e.preventDefault()
        if ( inputValue.trim().length > 2) {
            setCategories( cats => [inputValue, ...cats]);
            setinputValue('');
        }
        
    }

    return (
        <form onSubmit={ handlerSubmit}>
            <input
                type="text"
                value = {inputValue}
                onChange={ handlerInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}