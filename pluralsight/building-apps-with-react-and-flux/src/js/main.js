$ = jQuery = require('jquery');
require('bootstrap');

var React = require('react');

var Home = React.createClass({
    getInitialState() {
        return {
            message: 'React'
        };  
    },
    handleClick() {
        var self = this;
        this.setState({
            message: self.state.message === 'React' ? 'React clicked!!!!' : 'React'
        });
    },
    render() {
        return(
            <div>
                <div className="jumbotron">
                    <h1 className="display-4">Hello, world!</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-4" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                    </p>
                </div>
            </div>
        );
    }
});

React.render(<Home />, document.getElementById('app'));