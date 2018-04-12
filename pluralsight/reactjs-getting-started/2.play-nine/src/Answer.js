import React, {Component} from 'react';


class Answer extends Component {
	render() {
		
		const {selectedNumbers, unselectNumber} = this.props;


		return(
			<div className="col-5">
				<ul>
					{selectedNumbers.map((number, i) => 
						<li className="m-2" key={i}>
							<button className="btn btn-success" onClick={() => unselectNumber(number)}>{number}</button>
						</li>
					)}
				</ul>
			</div>
		);
	}
}

export default Answer;