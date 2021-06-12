import React,{useState} from 'react';
import './register.css'
import { useHistory } from 'react-router-dom';
function Register (props) {
    const history = useHistory();
    const [nick_nameValue,setInputValue] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const [repeated_password,setRepeatedPassword] = useState("");
    const shouldDisplay = nick_nameValue.length>0;
    const shouldEmail = email.length>0;
    const shouldDisplay_password = password.length>0;
    const shouldDisplay_repeated_password = repeated_password.length>0;
    
    var usernamecount=0;
    var emailcount=0;
	return(
        <div id="table">
			
		     <h1>Register</h1>
            <input type="text" id="username" placeholder="Enter Your Username:" value={nick_nameValue} onChange={
                function changeInput(event){
                    return(
                        setInputValue(event.target.value)
                    );
                }
            }required/>
            {shouldDisplay && <button onClick={
                function clearButton(){
                    setInputValue("");
                }
            }id="clear">X</button>}
            <br/>  
            <input type="email" id="email" placeholder="Enter an Email:" value={email} onChange={
                function changeInput(event){
                    return(
                        setEmail(event.target.value)
                    );
                }
            }required/>
            {shouldEmail && <button onClick={
                function clearButton(){
                    setEmail("");
                }
            }id="clear">X</button>}
            <br/>
            <input type="password" id="password" placeholder="Enter Your Password:" value={password} onChange={
                function changeInput(event){
                    return(
                        setPassword(event.target.value)
                    );
                }
            }required/>
            {shouldDisplay_password && <button onClick={
                function clearButton(){
                    setPassword("");
                }
            } id="clear">X</button>}
            <input type="password" id="repeated_password" placeholder="Enter Your Password Again:" value={repeated_password} onChange={
                function changeInput(event){
                    return(
                        setRepeatedPassword(event.target.value)
                    );
                }
            }required/>
            {shouldDisplay_repeated_password && <button onClick={
                function clearButton(){
                    setRepeatedPassword("");
                }
            } id="clear">X</button>}
            <br/>
		
            <button type="submit" id="register" onClick={
                
                function control (){
                    var username = document.getElementById("username").value;
                    var email = document.getElementById("email").value;
                    var password_a = document.getElementById("password");
                    var repeated_password_a = document.getElementById("repeated_password");
                    if(password_a.value !== repeated_password_a.value){
                        
                        alert("Please Enter a same password");
                        setPassword("");
                        setRepeatedPassword("");
                    }else{
                fetch("http://localhost:3000/users?username="+username).then(response =>{
                    response.json().then(response=>{
                        usernamecount =response.length
                        if (usernamecount > 0 ){
                            alert("This username is already signed up.");
                        }
                        else{
                        fetch("http://localhost:3000/users?email="+email).then(response =>{
                            response.json().then(response=>{
                                emailcount =response.length
                                console.log(emailcount)
                                if (emailcount > 0 ){
                                    alert("This email is already signed up.");
                                }
                                else{
                                    
                                    var data = {username:username,email:email,password:password}
                                    fetch('http://localhost:3000/users', {
                                    method: 'POST',
                                    headers: {
                                    'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify(data),
                                    }).then(response => response.json())
                                    .then(data => {
                                        history.push('/login')
                                    })
                                    .catch((error) => {
                                      console.error('Error:', error);
                                        });                    
                                    }
                            })
                        })
                        
                        }
                    })
                })
                

                }
            }
        
            }>Register</button>
        </div>
    );
}
export default Register;
