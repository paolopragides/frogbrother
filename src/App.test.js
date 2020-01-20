import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import ChatWindow from './ChatWindow';
import MessageBox from './MessageBox';
import NavBar from './NavBar';

it('Main app renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App activeTab="minionSonny"/>, div);
});

// Check Chat Window Component
it('Chat Window component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChatWindow activeTab="minionSonny"/>, div);
});

// Nav Bar Window Component
it('Nav Bar component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavBar activeTab="minionSonny"/>, div);
});

// Message Box Window Component
it('Message box component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MessageBox activeTab="minionSonny"/>, div);
});

// Check instantiating app state after instantiation
it('Active Tab is set based on property passed in', () => {
  var props = {
    activeTab: "minionFredo"
  }
  const app = new App(props);

  // Expect the activeTab state to switch to minionSonny
  expect(app.state.activeTab).toEqual("minionFredo");
});

// Test switching tabs
it('Tab switching', () => {

  const appDiv = document.createElement('div');
  const boxDiv = document.createElement('div');
  appDiv.setAttribute("id", "messageContent");

  let app = ReactDOM.render(<App activeTab="minionFredo"/>, appDiv);
  let messageBox = ReactDOM.render(<MessageBox activeTab="minionFredo"/>, boxDiv);

  // Switch to minionSonny tab
  app.handleTabSwitch("minionSonny");

  // Expect the activeTab state to switch to minionSonny
  expect(app.state.activeTab).toEqual("minionSonny");
});
