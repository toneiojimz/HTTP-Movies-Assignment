import React, {useState, useEffect} from 'react';
import axios from 'axios';

const initialMovie = {
    title:'',
    director: '',
    score: '',
    actors: [] 

};

const UpdateMovie = props => {
    const[movie, SetMovie] = useState(initialMovie);

    useEffect(() => {
        const movieToEdit = props.items.find(
            e => `${e.id}` === props.match.params.id
        );
    }, [props.movies, props.match.params.id]);


    const changeHandler = ev => {
        ev.persist();
        let value = ev.target.value;
        if(ev.target.title === 'director'){
            value = parseInt(value, 10)
        }
        
        setMovie ({
            ...movie, 
            [ev.target.title]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        axios 
            .put(`http://http://localhost:3000/movies/${movie.id}`, movie)
            .then (res => {
                props.UpdateMovie(res.data);
                props.history.push(`/movie-list/${movie.id}`);
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <h2>Update Movie</h2>
            <form onSubmit={handleSubmit}>
                <input 
                type='text'
                name='name'
                onChange={changeHandler}
                placeholder='title'
                value={movie.title}
                />
                 <input 
                type='text'
                name='director'
                onChange={changeHandler}
                placeholder='director'
                value={movie.director}
                />
                 <input 
                type='text'
                name='score'
                onChange={changeHandler}
                placeholder='score'
                value={movie.score}
                />
                 <input 
                type='text'
                name='actors'
                onChange={changeHandler}
                placeholder='actors'
                value={movie.actors}
                />
                <button>Update Movie</button>
            </form>
        </div>
    )
}