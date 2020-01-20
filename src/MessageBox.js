import React, { Component } from 'react';

class MessageBox extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            activeTab: this.props.activeTab
        }  

        this.handleTabSwitch = this.handleTabSwitch.bind(this);        
        this.handleMessageSend = this.handleMessageSend.bind(this);
    }

    handleTabSwitch(e) {
        this.props.handleTabSwitch(e.target.name);
    }

    handleMessageSend(e) {
        this.props.handleMessageSend();
    }
    
    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleMessageSend();
        }
    }    

    focusMessageBox() {
        document.getElementById("messageContent").focus();
    }

    render(){

        return (
            <div className="MessageBox">
                <input className="messageContent" id="messageContent" autoFocus onKeyPress={this.handleKeyPress} placeholder="Type your message here..." type="text" />
                <input className="" id="messageSend" type="button" value="Send" onClick={this.handleMessageSend}/>
            </div>
        )
    }
}

export default MessageBox;