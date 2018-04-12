import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component {

	state = { userName: '', isFetching: false}

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({
			isFetching: true
		});
		axios.get(`https://api.github.com/users/${this.state.userName}`)
			.then(res => {
				this.setState({
					isFetching: false
				});
				this.state.userName = '';
				this.props.onSubmit(res.data);
			})
	};

	render() {
		return(
			<form className="form-inline m-3" onSubmit={this.handleSubmit}>
				<div className="form-group">
					<input type="text" 
						value={this.state.userName} 
						onChange={(event) => this.setState({ userName: event.target.value })} 
						className="form-control" placeholder="Github username" />
				</div>
				<button type="submit" className="btn btn-primary ml-3">{this.state.isFetching ? 'Loading...' : 'Add Card'}</button>
			</form>
		);
	}
}

export default Form;