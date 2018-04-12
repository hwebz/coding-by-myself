import React, {Component} from 'react';


class Stars extends Component {
	render() {
		const {numberOfStars} = this.props;

		let stars = [];
		for(let i = 0; i < numberOfStars; i++) {
			stars.push(<i key={i} className="fas fa-star"></i>);
		}

		return(
			<div className="col-5">
				{stars}
			</div>
		);
	}
}

export default Stars;