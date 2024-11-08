import { useState } from "react";
import axios from "axios"; 

const Create = () => {
    
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [poster, setPoster] = useState('');

    // Submit button is clicked - details added to console
    const handleSubmit = (e) => {
        e.preventDefault();
        const movie = {title, year, poster};
        console.log(movie);

        axios.post('http://localhost:4000/api/movies', movie) // Added to server 
        .then((res) => {console.log(res.data)})
        .catch()
    }

    return(
        <div>
            <h3>Hello from create component</h3>
            
            <form onSubmit = {handleSubmit}>
                <div className="form-group">
                    <label>Add Movie Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange = {(e) => {setTitle(e.target.value)}}
                        />
                </div>

                <div className="form-group">
                    <label>Add Movie Year: </label>
                    <input type="text"
                        className="form-control"
                        value={year}
                        onChange = {(e) => {setYear(e.target.value)}}
                        />
                </div>

                <div className="form-group">
                    <label>Add Movie Poster: </label>
                    <input type="text"
                        className="form-control"
                        value={poster}
                        onChange = {(e) => {setPoster(e.target.value)}}
                        />
                </div>
                
                <div>
                    <input type="submit" value="Add Movie"></input>
                </div>
            </form>
        </div>
    )
}

export default Create;