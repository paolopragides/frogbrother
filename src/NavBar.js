import React, { Component } from 'react';

function MinionMenu(props) {
    return (
        <ul>
            <li id="minionSonny" className={props.activeTab === "minionSonny" ? "active" : ""}><div className="profilePhoto profileSonny"></div><div><a name="minionSonny" onClick={props.sideBar.handleTabSwitch}>Sonny</a></div></li>
            <li id="minionFredo" className={props.activeTab === "minionFredo" ? "active" : ""}><div className="profilePhoto profileFredo"></div><div><a name="minionFredo" onClick={props.sideBar.handleTabSwitch}>Fredo</a></div></li>
            <li id="minionMichael" className={props.activeTab === "minionMichael" ? "active" : ""}><div className="profilePhoto profileMichael"></div><div><a name="minionMichael" onClick={props.sideBar.handleTabSwitch}>Michael</a></div></li>
        </ul>
    );

}


class NavBar extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            activeTab: this.props.activeTab
        }  

        this.handleTabSwitch = this.handleTabSwitch.bind(this);        
    }

    handleTabSwitch(e) {
        this.props.handleTabSwitch(e.target.name);
    }

    render(){
        let menu;
        const activeTab = this.props.activeTab;

        
        menu = <MinionMenu activeTab={activeTab} sideBar={this}/>;

        return (
            <div className="navMenu">
                    {menu}
            </div>
        )
    }
}

export default NavBar;