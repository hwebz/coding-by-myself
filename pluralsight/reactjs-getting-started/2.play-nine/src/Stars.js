import React, {Component} from 'react';
import _ from 'lodash';

class Stars extends Component {
	render() {
		const stars = _.range(this.props.numberOfStars);
		return(
			<div className="col-5">
				{stars.map((num, i) => 
					<i key={i} className="fas fa-star"></i>
				)}
			</div>
		);
	}
}

export default Stars;