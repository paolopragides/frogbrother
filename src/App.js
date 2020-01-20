import React, { Component } from 'react';
import logo from './logo.svg';

import NavBar from './NavBar';
import ChatWindow from './ChatWindow';
import MessageBox from './MessageBox';

import './App.css';

class App extends Component {

  constructor(props) {
        super(props);

        this.state = {
            activeTab: this.props.activeTab,
            minions: {
              minionSonny: {
                label: "Sonny",
                chats: []
              },
              minionFredo: {
                label: "Fredo",
                chats: []
              },
              minionMichael: {
                label: "Michael",
                chats: []
              }
            }
        } 

        this.handleTabSwitch = this.handleTabSwitch.bind(this);
        this.handleMessageSend = this.handleMessageSend.bind(this);
  }


  handleTabSwitch(tabID) {

      let messageBox = document.getElementById("messageContent");
      if (messageBox) {
        messageBox.focus();
      }      
      this.setState({
          activeTab: tabID
      });         

  }

  handleMessageSend() {

    // Grab input box element
    let messageBox = document.getElementById("messageContent");

    // Grab the content of the message
    let messageContent = messageBox.value;

    // Check for an empty message    
    if (messageContent === "") {
      alert("Please enter a message");
      return;
    }

    // Generate a time stamp
    let today = new Date();
    let timeStamp = today.getFullYear() + "-" + today.getMonth()+1 + "-" + today.getDate();

    let chatDetails = {
      date: timeStamp,
      content: messageContent
    }

    // Append to the chat array for the appropriate minion
    this.state.minions[this.state.activeTab].chats.push(chatDetails);

    // Call setstate to force rerender
    this.setState({});    

    // Clear message box
    messageBox.value = "";
    messageBox.focus();

  }

  render() {
    return (
      <div className="App">
        <div className="App-Main">
          <div className="App-header">
            <div className="leftHeader">
              <img className="chatLogo" src="chatLogo.png" />
            </div>
            <div className="rightHeader">
              <img src="vitoProfile.jpg"  className="vitoProfileIcon" />
              <h2>Vito Corleone</h2>
            </div>
          </div>          
          <div className="Minion-Selector">
            <NavBar activeTab={this.state.activeTab} handleTabSwitch={this.handleTabSwitch}/>
          </div>
          <div className="ChatWindow">
            <div className="Minion-Chat">
              <div className="Chat-Container">
                <ChatWindow activeTab={this.state.activeTab} chats={this.state.minions[this.state.activeTab].chats}/>
              </div>
            </div>
            <div className="Message-Box">
              <MessageBox handleMessageSend={this.handleMessageSend}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
