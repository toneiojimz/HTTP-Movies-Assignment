import React, {useState, useEffect} from 'react';
import axios from 'axios';
import bulma from 'bulma';

const initialMovie = {
    title:'',
    director: '',
    metascore: '',
    starts: [] 

};

const UpdateMovie = props => {
    
    const[movie, setMovie] = useState(initialMovie);

    useEffect(() => {

        axios
            .get(`http://localhost:5000/api/movies/${props.match.params.id}`)
            .then(res => {
                console.log(res);
                setMovie(res.data);
            })
            .catch(err => console.log(err));
    }, [props.match.params.id]);


    const changeHandler = e => {
        setMovie({...movie, [e.target.name] : e.target.value})  
    };

    const handleSubmit = e => {
        e.preventDefault();

        axios 
            .put(`http://http://localhost:5000/movies/${movie.id}`, movie)
            .then (res => {
                // props.updateMovies(res.data)
                props.history.push(`/movies-list/${movie.id}`);
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='column is-centered'>
            <h2 className='title'>Update Movie</h2>
            <form className='box' onSubmit={handleSubmit}>
                <label htmlFor='title'>Title: </label>
                <input  className='column'
                type='text'
                name='title'
                onChange={changeHandler}
                placeholder='Title'
                value={movie.title}
                />
                <label htmlFor='title'>Director: </label>
                 <input className='column'
                type='text'
                name='director'
                onChange={changeHandler}
                placeholder='Director'
                value={movie.director}
                />
                <label htmlFor='title'>Metascore: </label>
                 <input className='column'
                type='number'
                name='metascore'
                onChange={changeHandler}
                placeholder='Metascore'
                value={movie.metascore}
                />
                <label htmlFor='title'>Actors: </label>
                 <input className='column'
                type='text'
                name='actors'
                onChange={changeHandler}
                placeholder='Actors'
                value={movie.stars}
                />
                <button className='button is-medium is-success'>Update Movie</button>
            </form>
        </div>
    )
};
export default UpdateMovie;