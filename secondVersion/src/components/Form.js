import React from 'react';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formOpen: true,
            network: '',
            commenter: '',
            user: '',
            massage: ''
        };
        this.onClick = this.onClick.bind(this);
    }
    onClick() {

        const { network, commenter, user, massage } = this.state;
        const comment = { network, commenter, user, massage };
        this.props.onSubmit(comment);
    }
    render() {
        const button = <button onClick={() => { this.setState({ formOpen: !this.state.formOpen }) }}>
            <i>Comment It!</i>
        </button>;
        const form = (


            <div className="comment">
                <body>
                    <label>network: </label><input placeholder="Network" type="text" id="network" value={this.state.network} onChange={e => this.setState({ network: e.target.value })} />
                    <br />
                    <label>user and commenter: </label>

                    <input placeholder="commenter" type="text" id="commenter" value={this.state.commenter} onChange={e => this.setState({ commenter: e.target.value })} />

                    <input placeholder="user" type="text" id="user" value={this.state.user} onChange={e => this.setState({ user: e.target.value })} />
                    <br />
                    <label>comment: </label> <textarea placeholder="comment" id="massage" value={this.state.decription} onChange={e => this.setState({ massage: e.target.value })} />


                    <button onClick={this.onClick} id="button">Comment It!</button>

                </body>

            </div>
        );
        return this.state.formOpen ? form : button;
    }
}
