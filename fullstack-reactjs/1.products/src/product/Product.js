import React, {Component} from 'react';

class Product extends Component {

    // constructor(props) {
    //     super(props); // always call this first

    //     // custom method bindings here
    //     //this.handleUpVote = this.handleUpVote.bind(this);
    // }

    handleUpVote = () => {
        this.props.onVote(this.props.id);
    }

    render() {
        let {id, title, description, url, votes, submitterAvatarUrl, productImageUrl} = this.props;
        return(
            <div className="card" key={id}>
                <img className="card-img-top" src={productImageUrl} alt={title} />
                <div className="card-body">
                    <h3><a href={url}>{title}</a></h3>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">Vote: {votes} {votes > 1 ? 'votes' : 'vote'}</small><button className="btn btn-primary m-1" onClick={this.handleUpVote}>Up</button><button className="btn btn-warning m-1">Down</button></p>
                    <p className="card-text"><small className="text-muted">Submitted by: <img width="25px" src={submitterAvatarUrl} alt={title} /></small></p>
                </div>
            </div>
        );
    }
}

export default Product;