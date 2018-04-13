import React, {Component} from 'react';
import _ from 'lodash';

class Numbers extends Component {
	render() {

		const numberClassName = (number) => {
			if (this.props.usedNumbers.indexOf(number) >= 0) {
				return 'used';
			}

			if (this.props.selectedNumbers.indexOf(number) >= 0) {
				return 'selected';
			}
		};

		return(
			<div className="card text-center mt-3">
				{_.range(1, 10).map((number, i) => 
					<span key={i} className={numberClassName(number)} onClick={() => this.props.selectNumber(number)}>{number}</span>
				)}
			</div>
		);
	}
}

export default Numbers;