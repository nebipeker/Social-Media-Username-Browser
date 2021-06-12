import React, { Component } from 'react';
import Heading from '../../components/Heading'
import Table from '../../components/Table'
import '../../App.css';

import Form from '../../components/Form'

class Addcomment extends Component {
  constructor(props) {
    super(props);
    
    
    
  }

  onAdd(comment) {
    let { commentList } = this.state;
    commentList.push(comment);
    this.setState({ commentList });
  }


  render() {
    return (
      <div className="App">
        <Heading title="Comments For Everyone" />
        <Form onSubmit={
          function pushcomment(){
            var network = document.getElementById("network").value
            var commenter = document.getElementById("commenter").value
            var user = document.getElementById("user").value
            var message = document.getElementById("message").value
            var data = {network:network, commenter:commenter, user:user, message:message}
            console.log(data)
            fetch('http://localhost:3000/comments', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            }).then(response => response.json())
            .then(data => {
                alert("Comment added")
            })
            .catch((error) => {
              console.error('Error:', error);
                });   
          }
          }/>
        
      </div>
    );
  }
}

export default Addcomment;
