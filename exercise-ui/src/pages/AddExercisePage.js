import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export const AddExercisePage = () => {
    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('');
    const [date, setDate] = useState('');

    const history = useHistory();

    const addExercise = async () => {
        const newExercise = {name, reps, weight, unit, date};
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201) {
            alert('Successfully added the exercise');
        } else {
            alert(`Failed to add movie, status code = ${response.status}`);
        }
        history.push('/');
    };

    return (
        <div>
            <h1>Add Exercise</h1>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Reps</th>
                    <th>Weight</th>
                    <th>Unit</th>
                    <th>Date</th>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input 
                                type='text'
                                placeholder='Enter name here'
                                value={name}
                                onChange={e => setName(e.target.value)} />
                        </td>
                        <td>
                            <input 
                                type='text'
                                placeholder='Enter reps here'
                                value={reps}
                                onChange={e => setReps(e.target.value)} />
                        </td>
                        <td>
                            <input 
                                type='text'
                                placeholder='Enter weight here'
                                value={weight}
                                onChange={e => setWeight(e.target.value)} />
                        </td>
                        <td>
                            <input 
                                list='unit'
                                placeholder='Enter unit here'
                                value={unit}
                                onChange={e => setUnit(e.target.value)} />
                            <datalist id='unit'>
                                <option value='lbs' />
                                <option value='kgs' />
                            </datalist>
                        </td>
                        <td>
                            <input 
                                type='date'
                                placeholder='Enter date here'
                                value={date}
                                onChange={e => setDate(e.target.value)} />
                        </td>
                    </tr>
                </tbody>
            </table>
            <button onClick={addExercise}>Add</button>
        </div>
    );
}

export default AddExercisePage;