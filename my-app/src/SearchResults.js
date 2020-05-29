import React from 'react';

function SearchResults(props) {
    return (
        <ul>
            {props.results.map((result) => {
                return (
                    <li key-={result.id}>
                        <b>{result.name}</b>
                        {result.description}
                    </li>
                )
            })}
        </ul>
    )
}

export default SearchResults;