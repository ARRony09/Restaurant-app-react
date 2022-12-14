import React, { Component } from "react";
import { Button, Form, Input } from 'reactstrap'

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: "",
            rating: "",
            comment: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        this.props.addcomment(this.props.dishId, this.state.rating, this.state.author, this.state.comment)
        this.setState({
            author: "",
            rating: "",
            comment: ""
        })
        //console.log(this.state);
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Input type='text' name='author' value={this.state.author}
                        placeholder="Your Name" onChange={this.handleInputChange} handleInputChange required />
                    <br />
                    <Input type="select" name="rating"
                        value={this.state.rating} onChange={this.handleInputChange} required>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                    <br />
                    <Input type="textarea" name='comment' onChange={this.handleInputChange} value={this.state.comment} required />
                    <br />
                    <Button type="'submit">Submit Comment</Button>
                </Form>
            </div>
        );
    }

}

export default CommentForm;