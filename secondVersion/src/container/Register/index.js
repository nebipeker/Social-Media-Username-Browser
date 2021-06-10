
import React,{useState} from 'react';
import "./register.css";
function Register() {
    const [nick_nameValue,setInputValue] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const [repeated_password,setRepeatedPassword] = useState("");
    const shouldDisplay = nick_nameValue.length>0;
    const shouldEmail = email.length>0;
    const shouldDisplay_password = password.length>0;
    const shouldDisplay_repeated_password = repeated_password.length>0;
    return(
        <div id="table">
            <input type="text" id="username" placeholder="Enter Your Usarname:" value={nick_nameValue} onChange={
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
                function checkThePassword(){
                    var password_a = document.getElementById("password");
                    var repeated_password_a = document.getElementById("repeated_password");
                    if(password_a.value != repeated_password_a.value){
                        alert("Please Enter a same password");
                        setPassword("");
                        setRepeatedPassword("");
                    }else{
                        alert("User registered successfully!")
                        //checkTheUser info
                    }
                }
            }>Register</button>
        </div>
    );
}
export default Register;
