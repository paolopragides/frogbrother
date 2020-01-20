import React, { Component } from 'react';



class MessageInfo extends React.Component {

    constructor(props) {
        super(props)
    }


    render(){
        return (
            <div className="messageInfo">
                <div className="messageDate">{this.props.date}</div>
                <div className="messageText">{this.props.content}</div>
            </div>
        )
    }
}

export default MessageInfo;