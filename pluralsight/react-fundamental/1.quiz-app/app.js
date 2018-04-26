(function() {
	'use strict';

	var Quiz = React.createClass({
		render: function() {
			return (
				<div>
					{this.props.books.map(function(b) {
						return <Book title={b} />
					})}
				</div>
			);
		}
	});

	var Book = React.createClass({
		propTypes: {
			title: React.propTypes.string.isRequired
		},
		render: function() {
			return(
				<div>
					<div className="row">
						<div className="col-md-4">
							<img src={this.state.author.imageUrl} className="" />
						</div>
					</div>
				</div>
			);
		}
	});

	React.render(<Quiz data={"foo"} />, document.getElementById('app'));
})();