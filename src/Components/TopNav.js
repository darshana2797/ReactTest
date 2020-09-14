import React, { Component } from 'react';
import { connect } from 'react-redux'
import styles from './styles'
import { FaUserCircle } from 'react-icons/fa';
import { Dropdown } from 'react-bootstrap';

class TopNav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
      var title = '' + this.props.details.sideNavItem + (this.props.details.selectedCardTitle !== null &&  this.props.details.sideNavItem === "Settings" ? ' > '+this.props.details.selectedCardTitle : '')
      return (
        <div className="container-fluid row" style={{width:'100%', height: '60px', flexDirection: 'row', justifyContent: 'space-between', display: 'flex', alignItems: 'center'}}>
          <div id="title" style={styles.title}>{title}</div>
          <div style={styles.rightNavbarDataStyle}>
            <div><p style={styles.username}>Admin</p></div>
            <div><FaUserCircle  size='1.5em' color='purple'/></div>
            <Dropdown>
              <Dropdown.Toggle style={{backgroundColor: 'transparent', color: 'purple', borderColor: 'transparent'}} id="dropdown-basic"></Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">My Profile</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Notifications</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      )
    }
}

export function mapStateToProps(state){
  return {
    details:state.data
  }
}

export default connect(mapStateToProps)(TopNav)