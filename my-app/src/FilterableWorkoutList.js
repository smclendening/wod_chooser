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
    const [showNoResults, setShowNoResults] = useState(false);
    const [workouts, setWorkouts] = useState([]);

    // handle search
    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    // handle submit
    const searchForWorkouts = async () => {
        try {
            const response = await fetch(`${API_URL}/exercise?format=json&language=2&limit=5&status=2&muscles=${searchValue}`);
            const { results } = await response.json();
            console.log('{ results }: ', results);
            setSearchResults(results);
        } catch(err) {
            console.log('error: ', err);
        }
    }

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        await searchForWorkouts();
    }

    const handleResultClick = (result) => {
        const newWorkout = { id: result.id, name: result.name };
        setWorkouts([...workouts, newWorkout ]);
    }

    const handleResultDelete = (index) => {
        const updatedWorkouts = workouts.filter((workout, i) => i !== index);
        setWorkouts(updatedWorkouts);
    }

    return (
        <Fragment>
            <SearchBar
                value={searchValue}
                handleChange={handleSearchChange}
                handleSubmit={handleSearchSubmit}/>
            <SearchResults results={searchResults} handleResultClick={handleResultClick}/>
            <WorkoutList workouts={workouts} onDelete={handleResultDelete}/>
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