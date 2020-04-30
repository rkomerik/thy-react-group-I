import React from 'react'


class ApproveCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { msg: 'Are you sure?', isApproved: false }
    }


    onFriendClick = () => {
        console.log("Friend clicked.");
        this.setState({ msg: `Yey! You r frind`, isApproved:true });
    }
    onBlameClick = () => {
        console.log("Blame clicked.");
        this.setState({ msg: `:( But why?`, isApproved: false });
    }

    render() {
        // let additionalPart;
        // if (this.state.isApproved) {
        //     additionalPart = 'Thank you you already friend';
        // } else {
        //     additionalPart = <div className="extra content">
        //         <div className="ui two buttons">
        //             <button className="ui basic green button" onClick={this.onFriendClick}>Make Friend</button>
        //             <button className="ui basic red button" onClick={this.onBlameClick}>Blame!</button>
        //         </div>
        //     </div>
        // }
        return (
            <div className="ui card">
                <div className="content">{this.state.msg}</div>
                <div className="extra content">
                    {this.props.children}
                </div>
                {
                this.state.isApproved ? 'Thank you you already friend' : 
                <div className="extra content">
                         <div className="ui two buttons">
                             <button className="ui basic green button" onClick={this.onFriendClick}>Make Friend</button>
                             <button className="ui basic red button" onClick={this.onBlameClick}>Blame!</button>
                         </div>
                     </div>
                }
            </div>

        )
    }
}

export default ApproveCard;