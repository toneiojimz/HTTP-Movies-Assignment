import React, {useState, useEffect} from 'react';
import axios from 'axios';

const initialMovie = {
    title:'',
    director: '',
    metascore: '',
    starts: [] 

};

const UpdateMovie = props => {
    const[movie, SetMovie] = useState(initialMovie);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/movies/${props.match.params.id}`)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
    }, [props.match.params.id]);


    const changeHandler = e => {
        SetMovie({...movie, [e.target.name] : e.target.value})  
    };;

    const handleSubmit = e => {
        e.preventDefault();

        axios 
            .put(`http://http://localhost:3000/movies/${movie.id}`, movie)
            .then (res => {
                props.UpdateMovie(res.data);
                props.history.push(`/movies/${movie.id}`);
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
                placeholder='Title'
                value={movie.title}
                />
                 <input 
                type='text'
                name='director'
                onChange={changeHandler}
                placeholder='Director'
                value={movie.director}
                />
                 <input 
                type='text'
                name='score'
                onChange={changeHandler}
                placeholder='Metascore'
                value={movie.metascore}
                />
                 <input 
                type='text'
                name='actors'
                onChange={changeHandler}
                placeholder='Actors'
                value={movie.stars}
                />
                <button>Update Movie</button>
            </form>
        </div>
    )
};
export default UpdateMovie;