import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectedSidenavItem } from '../Redux/actions/userActions'
import styles from './styles'
import { FaComment, FaChartPie, FaLaptop, FaShoppingBag, FaUsers } from 'react-icons/fa';
import { MdSettings, MdClose, MdNotifications } from 'react-icons/md'
import { Button } from 'react-bootstrap';

class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleClick = (item) => {
      this.props.selectedSidenavItem(item)
    }

    render() {
        return (
          <div style={styles.sideNavbar}>
            <div style={{height: '93%'}}>
              <Button style={styles.iconContainer} onClick={()=>this.handleClick('Close')}><MdClose size='1.5em' color='white'/></Button>
              <Button style={styles.iconContainer} onClick={()=>this.handleClick('Comments')}><FaComment size='1.5em' color='white'/></Button>
              <Button style={styles.iconContainer} onClick={()=>this.handleClick('Charts')}><FaChartPie size='1.5em' color='white'/></Button>
              <Button style={styles.iconContainer} onClick={()=>this.handleClick('Work')}><FaLaptop size='1.5em' color='white'/></Button>
              <Button style={styles.iconContainer} onClick={()=>this.handleClick('Bag')}><FaShoppingBag size='1.5em' color='white'/></Button>
              <Button style={styles.iconContainer} onClick={()=>this.handleClick('Users')}><FaUsers size='1.5em' color='white'/></Button>
              <Button style={styles.iconContainer} onClick={()=>this.handleClick('Settings')}><MdSettings size='1.5em' color='white'/></Button>
            </div>
            <div style={{display: 'inline-block', position: 'relative'}}><MdNotifications size='2em' color='white'/><span style={styles.buttonBadge}>12</span></div>
          </div>
        )
    }
}

export function mapDispatchToProps(dispatch) {
	return {
      selectedSidenavItem: (selectedItem) => dispatch(selectedSidenavItem(selectedItem)),
    }
}

export function mapStateToProps(state){
  return {
    details:state.data
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideNav)