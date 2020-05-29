import React, { useState } from 'react';

function SearchBar(props) {
    console.log('props handle change: ', props.handleChange);
    return (
        <form onSubmit={props.handleSubmit}>
            <label>
                Workout Type:
                <input type="text" value={props.value} onChange={props.handleChange}/>
            </label>
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default SearchBar;