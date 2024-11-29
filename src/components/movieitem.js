import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom"; // Used to create in-app navigation without needing to refresh the page
import Button from "react-bootstrap/Button";
import axios from axios;

const MovieItem = (props) => {
    useEffect(()=>{ 
        console.log("Movie Item: ", props.mymovie);
        }, [props.mymovie]);

    const handleDelete = (e) => {
        e.preventDefault();
        axios.delete('http://localhost:4000/api/movies/' + props.mymovie._id)
            .then(() => {
                props.Reload();
            })
            .catch((error) => {
                console.error("Error deleting movie: ", error);
            });
    }
    return (

        <div>
            <Card>
                <Card.Header>{props.mymovie.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.mymovie.poster} alt={props.mymovie.title}></img>
                        <footer>{props.mymovie.year}</footer>
                    </blockquote>
                </Card.Body>
                {/* Edit button is added under every movie item. 'to' attribute defines the path that Link component should navigate to when clicked*/}
                <Link className="btn btn-primary" to={"/edit/" + props.mymovie._id}>Edit</Link>
                <Button className="btn btn-danger">Delete</Button>
            </Card>
        </div>
    );
}

export default MovieItem;