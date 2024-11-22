import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom"; // Used to create in-app navigation without needing to refresh the page

const MovieItem = (props) => {

    useEffect(()=>{
            
        console.log("Movie Item: ", props.mymovie);
        }, [props.mymovie]);
    return(

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
            </Card>
        </div>
    );
}

export default MovieItem;