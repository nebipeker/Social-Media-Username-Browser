import React,{useState} from 'react';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';
import "./login.css";
function Login(){
    const [nick_nameValue,setInputValue] = useState("");
    const [password_value,setPassword] = useState("");
    const shouldDisplay = nick_nameValue.length>0;
    const shouldDisplay_password = password_value.length>0;
    return (
      <div className="Login">
        <h2>Sign-In</h2>
        <Form className="form">
          <FormGroup>
            <Label for="exampleEmail" id="Username">Username</Label>
            <br/>
            <Input
                type="text"
                name="username"
                id="exampleEmail"
                value={nick_nameValue}
                placeholder="Please enter your name:"
                onChange={
                function clear(event) {
                    setInputValue(event.target.value);
            }}/>
            {shouldDisplay && <Button id="X-button" onClick={
                function clearInnerText(){
                    setInputValue("");
                }
            }>x</Button>}
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword" id="password_label">Password</Label>
            <br/>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              value = {password_value}
              placeholder="********"
              onChange={
                function clear(event) {
                    setPassword(event.target.value);
            }
              }
            />
            {shouldDisplay_password && <Button id="X-button" onClick={
                function clear() {
                    setPassword("");
                }
            }>x</Button>}
          </FormGroup>
        <Button id="submit" onClick={
            function CheckTheUserExistence(){
                //if user exists
                alert("Welcome back...x");
                //if not 
                alert ("Try again");
            }
        }>Submit</Button>
      </Form>
    </div>
  );
};export default Login;