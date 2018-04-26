(function() {
	'use strict';

	var Quiz = React.createClass({

		getInitialState() {
			return {
				inputValue: 'value by ref'
			}
		},

		componentDidMount: function() {
			this.refs.inp.getDOMNode().value = this.state.inputValue;
		},

		handleChange: function() {
			var self = this;
			this.setState({
				inputValue: self.refs.inp.getDOMNode().value
			})
		},

		render: function() {
			return (
				<div>
					{/* {this.props.books.map(function(b) {
						return <Book title={b} />
					})} */}
					<a href="#add">Add game</a>
					<input type="text" ref="inp" placeholder="Enter value..." onChange={this.handleChange} />
					<p>{this.state.inputValue}</p>
				</div>
			);
		}
	});

	var Book = React.createClass({
		propTypes: {
			//title: React.propTypes.string.isRequired
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

	var AddGameForm = React.createClass({
		render: function() {
			return(
				<h1>Add game form</h1>
			);
		}
	});

	routie({
		'': function() {
			React.render(<Quiz data={"foo"} />, document.getElementById('app'));
		},
		'add': function() {
			React.render(<AddGameForm />, document.getElementById('app'));
		}
	})

	
})();