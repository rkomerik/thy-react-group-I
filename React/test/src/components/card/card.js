import React from 'react'


class Card extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="ui link cards">
            <div className="card">
                <div className="image">
                    <img src={this.props.avatar} />
                </div>
                <div className="content">
                    <div className="header">{this.props.firstName} {this.props.lastName}</div>
                    <div className="meta"><a>Friends</a></div>
                    <div className="description">{this.props.jobArea}</div>
                </div>
                <div className="extra content">
                    <span className="right floated">Joined in {this.props.joinDate}</span>
                    <span><i className="user icon"></i>{this.props.friendsCount} Friends</span>
                </div>

            </div>
        </div>)
    }
}

export default Card;