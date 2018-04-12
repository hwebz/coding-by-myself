import React, {Component} from 'react';

class Card extends Component {
	render() {
		let {user} = this.props;

		return(
			<li className="media m-3">
	            <img className="mr-3" style={{width: '64px'}} src={user.avatar_url} alt={user.name} />
	            <div className="media-body">
	              <h4 className="mt-0 mb-1">{user.name}</h4>
	              {user.company}
	            </div>
          	</li>
		);
	}
}

export default Card;