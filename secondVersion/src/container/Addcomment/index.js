import React, { Component } from 'react';
import Heading from '../../components/Heading'
import Table from '../../components/Table'
import '../../App.css';
import * as data from '../../data.json';
import Form from '../../components/Form'

class Addcomment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentList: data.commentList
    }

    this.onAdd = this.onAdd.bind(this);
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
        <Form onSubmit={this.onAdd} />
        <Table data={this.state.commentList} />
      </div>
    );
  }
}

export default Addcomment;
