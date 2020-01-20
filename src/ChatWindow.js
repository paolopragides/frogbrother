import React, { Component } from 'react';



class ChatWindow extends React.Component {

    constructor(props) {
        super(props)
  
    }

    render(){
        let chatContent = "";    
        // No Chats
        if (this.props.chats === undefined || this.props.chats === "" || this.props.chats.length === 0) {
            chatContent = "<div class='noMessages'>Send a message to start a conversation.</div>";
        }
        else {
            for (var x = 0; x < this.props.chats.length; x++) {
                chatContent += "<div class='messageBlock'>";
                    chatContent += "<div class='vitoProfile'><img src='vitoProfile.jpg'  class='vitoChatIcon' /></div>"
                    chatContent += "<div class='messageInfo'>";
                        chatContent += "<div class='messageDate'>" + this.props.chats[x].date + "</div>";
                        chatContent += "<div class='messageText'>" + this.props.chats[x].content + "</div>";
                    chatContent += "</div>";
                    chatContent += "<div style='clear: both;'></div>";
                chatContent += "</div>";
            }
            
        }

        return (
            <div className="MessageWindow" dangerouslySetInnerHTML={{ __html: chatContent }} />
        )
    }
}

export default ChatWindow;