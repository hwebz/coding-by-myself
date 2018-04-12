import React, {Component} from 'react';
import _ from 'lodash';

class Numbers extends Component {

	render() {
		
		const arrayOfNumbers = _.range(1, 10);
		const numberClassName = (number) => {
			if (this.props.selectedNumbers.indexOf(number) >= 0) {
				return 'disabled';
			}
		}

		return(
			<div className="col numbers">
				<ul>
					{arrayOfNumbers.map((number, i) => 
						<li className="m-2" key={i}>
							<button className={'btn btn-info ' + numberClassName(number)} onClick={() => this.props.onNumberClicked(number)}>{number}</button>
						</li>
					)}
				</ul>
			</div>
		);
	}
}

export default Numbers;