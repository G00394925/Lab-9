const Create = () => {
    
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title);
    }

    return(
        <div>
            <h3>Hello from create component</h3>
            <form onSubmit = {handleSubmit}>
                <div>
                    <label>Add Movie Title: </label>
                    <input type="text"
                    className="form-control"
                    value={title}
                    onChange = {(e) => {setTitle(e.target.value)}} />
                </div>
                
                <div>
                    <input type="submit" value="Add Movie"></input>
                </div>
            </form>
        </div>
    )
}

export default Create;