import React, { Component } from 'react';
import { connect } from 'react-redux'
import {getDashboardData, selectedCardTitle} from '../../Redux/actions/userActions'
import styles from './styles'
import { Card } from 'react-bootstrap';
import * as FontAwesome from "react-icons/fa";
import SideNav from '../../Components/SideNav';
import TopNav from '../../Components/TopNav';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state={}
    }

    componentDidMount() {
        this.props.getDashboardData()
        this.props.selectedCardTitle(null)
    }

    render() {
        const Icon = props => {
          const { iconName, size, color } = props;
          const icon = React.createElement(FontAwesome[iconName]);
          return (
            <div style={{ fontSize: size, color: color }}>{icon}</div>
          );
        };

        var allData = this.props.details
        let cards = this.props.details && this.props.details.dashboardData.map((item,idx) => {
          return (
            <Card className="shadow-sm p-3 mb-5 bg-white rounded" 
              style={styles.cardStyle} 
              key={idx} 
              onClick={()=> {
                this.props.selectedCardTitle(item.title)
                this.props.history.push("/listing")
              }}>
              <Card.Body style={styles.cardBodyStyle}>
                <Card.Text style={styles.cardTextStyle}>
                    <Icon iconName={item.icon} size={'3.5rem'} color="orange" />
                    <p style={{fontSize: '12px'}}>{item.title}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          )
        })

      return (
          <div style={styles.containerStyle}>
        
            <SideNav/>

            <div style={{flexDirection: 'column', width: 'calc(100vw - 60px)'}}>

              <TopNav/>

              {allData.sideNavItem === "Settings" &&
                <div className="row" style={styles.rowStyle}>
                  <div className="col-lg-3 col-md-3 col-sm-12">
                    <p style={styles.titleStyle}> GENERAL SETTINGS </p>
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-12 flex-container" style={styles.cardsContainer}>
                    {cards}
                  </div>
                </div>
              }

              {allData.sideNavItem !== "Settings" && allData.sideNavItem !== "Close" &&
                <div className="container-fluid" style={styles.contentCenter}>
                  <h6>Something related to {allData.sideNavItem} would go in this section.</h6>
                </div>
              }

              {allData.sideNavItem === "Close" &&
                <div className="container-fluid" style={styles.contentCenter}>
                  <h6>Ask for confirmation or do something else if clicked on {allData.sideNavItem}</h6>
                </div>
              }

            </div>
            
          </div>
      )
    }
}

export function mapDispatchToProps(dispatch) {
	return {
    getDashboardData: () => dispatch(getDashboardData()),
    selectedCardTitle: (selectedCard) => {
      dispatch(selectedCardTitle(selectedCard))
    }
  }
}

export function mapStateToProps(state){
    return {
      details:state.data
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)