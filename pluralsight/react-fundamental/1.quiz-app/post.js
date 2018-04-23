(function() {
	'use strict';

	var post = {
		title: "ReactJS Fundamental",
		content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae aut, veniam perferendis quibusdam unde, cumque incidunt! Mollitia delectus doloremque aliquam, cumque, unde quisquam ut! Non quod est nemo incidunt debitis.",
		comments: [
			"Consequuntur ullam minus error laudantium eligendi. Consequatur iste accusantium facilis quas ratione reiciendis soluta. Nam fugiat ratione non impedit vero laborum maiores.",
			"Dignissimos error saepe, facilis ullam nulla, quam qui debitis laborum vero alias minus veniam consectetur quod quibusdam distinctio porro impedit ducimus odio.",
			"Tenetur assumenda repellat aut quos obcaecati quia porro quaerat aperiam accusantium ratione dignissimos sint consectetur iure, eaque commodi laudantium quidem itaque impedit."
		]
	}

	var Post = React.createClass({
		render: function() {
			return(
				<div className="container mt-4">
					<h3>{this.props.data.title}</h3>
					<p>{this.props.data.content}</p>
					<hr />
					<h4>Comments</h4>
					<ul>
						{this.props.data.comments.map(function(comment) {
							return 	<li>
										<Comment content={comment} />
									</li>;
						})}
					</ul>
				</div>
			);
		}
	});

	var Comment = React.createClass({
		render: function() {
			return(
				<div>{this.props.content}</div>
			);
		}
	})

	React.render(<Post data={post} />, document.getElementById('app'));

})();