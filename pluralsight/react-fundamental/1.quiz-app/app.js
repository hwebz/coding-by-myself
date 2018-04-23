(function() {
	'use strict';

	var Quiz = React.createClass({
		render: function() {
			return <div>{this.props.data}</div>;
		}
	});

	var Book = React.createClass({
		render: function() {
			return(

			);
		}
	});

	React.render(<Quiz data={"foo"} />, document.getElementById('app'));
})();