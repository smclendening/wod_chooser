import React, { Fragment } from 'react';

function WorkoutList(props) {
    return (
        <Fragment>
            <h3>Workouts</h3>
            <ol>
                {props.workouts.map((workout, i) => {
                    console.log('index:', i);
                    return (
                        <div>
                            {workout.id} - {workout.name}
                            <button
                                onClick={() => props.onDelete(i)}>
                                    Delete
                            </button>
                        </div>
                    )
                })}
            </ol>
        </Fragment>

    )
}

export default WorkoutList;