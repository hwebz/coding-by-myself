import React, {Component} from 'react'
import { connect } from 'react-redux'

class EditComponent extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
        const newTitle = this.getTitle.value;
        const newMessage = this.getMessage.value;
        const data = {
            newTitle,
            newMessage
        }
        this.props.dispatch({
            type: 'UPDATE',
            id: this.props.post.id,
            data: data
        });
    }

    render() {
        return (
            <div key={this.props.post.id} className="post">
                <form className="form" onSubmit={this.handleSubmit}>
                    <input required type="text" placeholder="Enter post title" ref={input => this.getTitle = input} defaultValue={this.props.post.title} /><br/><br/>
                    <textarea required rows="5" cols="28" placeholder="Enter post" ref={input => this.getMessage = input} defaultValue={this.props.post.message}></textarea><br/><br/>
                    <button>Update</button>
                </form>
            </div>
        )
    }
}

export default connect()(EditComponent)