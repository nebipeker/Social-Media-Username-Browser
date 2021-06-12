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
    var usernamecount=0
    return (
      <div className="Login">
        <h2>Sign-In</h2>
        <Form className="form">
          <FormGroup>
            <Label for="Email" id="Username">Username</Label>
            <br/>
            <Input
                type="text"
                name="username"
                id="username"
                value={nick_nameValue}
                placeholder="Username"
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
            <Label for="Password" id="password_label">Password</Label>
            <br/>
            <Input
              type="password"
              name="password"
              id="password"
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
            function control(){
              var username = document.getElementById("username").value;
              var password = document.getElementById("password").value;
              fetch("http://localhost:3000/users?username="+username).then(response =>{
                    response.json().then(response=>{
                        usernamecount =response.length
                        if (usernamecount > 0 ){
                            if(response[0].password === password){
                                console.log("success")
                            }else{
                              console.log("fail")
                            }
                        }else{
                          alert("This username is not signed up.");
                        }
                      }) 
               } )
              }
            
        }>Submit</Button>
      </Form>
    </div>
  );
};export default Login;