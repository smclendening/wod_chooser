import React, { useState, useEffect, Fragment } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import WorkoutList from './WorkoutList';

const API_URL = 'https://wger.de/api/v2';

// const searchTermToDigit = {
//     '2'
// }

function FilterableWorkoutList() {

    // get workouts effect
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchChange = (e) => {
        console.log('setting search value: ', e, e.target.value);
        setSearchValue(e.target.value);
    };

    const searchForWorkouts = () => {
        fetch(`${API_URL}/exercise?format=json&language=2&limit=5&status=2&muscles=${searchValue}`)
            .then((response) => response.json())
            .then(({results}) => setSearchResults(results))
            .catch((err) => {
                console.log('error getting exercises: ', err);
            })
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        searchForWorkouts();
    }


    return (
        <Fragment>
            <SearchBar
                value={searchValue}
                handleChange={handleSearchChange}
                handleSubmit={handleSearchSubmit}/>
            <SearchResults results={searchResults}/>
            <WorkoutList/>
        </Fragment>
    );
}

export default FilterableWorkoutList;


/**
 * FilterableWorkoutList
 *  - searchBar
 *  - searchResults
 *  - currentWorkout
 */