import React from "react";
import { Button, Label, Jumbotron } from "reactstrap";
import "./homes.css";
import { useHistory } from 'react-router-dom';

function Home() {
	const history = useHistory();
    return (
        <div id="main_page">
            <Label id="text">
                Welcome to
            </Label>
            <br />
            <Label id="text">
                Comment for
            </Label>
            <br />
            <Label id="text">
                Everyone
            </Label>
            <br />
            <Button id="show_comments" onClick={() => history.push('/addcomment') }></Button>
            <Button id="add_comment" onClick={() => history.push('/addcomment') }></Button>
            <Jumbotron>
                <h1>Start From Here !</h1>
                <p>
                    If you want to add comment please login.Otherwise just press the 
                    show comments to see. For getting more information about website please 
                    click about.
                </p>
            </Jumbotron>
        </div >

    );
}
export default Home;