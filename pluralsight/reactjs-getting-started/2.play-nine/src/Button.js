import React, {Component} from 'react';


class Button extends Component {
	render() {

		const {selectedNumbers, answerIsCorrect} = this.props;
		let button;
		
		switch(answerIsCorrect) {
			case true:
				button = <button className="btn btn-success m-2">
							<i className="fas fa-check"></i>
						</button>
				break;
			case false:
				button = <button className="btn btn-danger m-2">
							<i className="fas fa-times"></i>
						</button>
				break;
			default:
				button = <button className="btn btn-primary m-2" 
						disabled={selectedNumbers.length === 0}
						onClick={this.props.checkAnswer}>=</button>
				break;
		}

		return(
			<div className="col-2">
				{button}
			</div>
		);
	}
}

export default Button;