import React, { Component } from 'react';
import { connect } from 'react-redux'
import {getListingData, selectedCardTitle} from '../../Redux/actions/userActions'
import styles from './styles'
import { Button } from 'react-bootstrap';
import { FaFileImport, FaFileExport, FaPencilAlt, FaMinusCircle, FaCopy } from 'react-icons/fa';

import SideNav from '../../Components/SideNav';
import TopNav from '../../Components/TopNav';

import ReactTable from 'react-table-v6';
import "react-table-v6/react-table.css";


class Listing extends Component {
    constructor(props) {
        super(props);
        this.state={
          selectedSection: 'Settings'
        }
    }

    componentDidMount() {
      this.props.getListingData()
    }

    handleClick = (item, id) => {
      return alert(item + ' clicked ' + ' for ' + id )
    }

    render() {
        var tableData=[]
        var columns=[]

        this.props.details.listingData && this.props.details.listingData.map((item, idx) => {
         return tableData.push({
            name: item.name, 
            kind: item.kind, 
            brand: item.brand, 
          })
        })

        columns=[
          {
            Header: 'Name',
            accessor: 'name',
          },
          {
            Header: 'Kind',
            accessor: 'kind',
            Cell: row => (
              <div style={{textAlign: 'center'}}>
                <div style={styles.kindStyle}>
                  {row.value}
                </div>
              </div>
            )
          },
          {
            Header: 'Brand',
            accessor: 'brand',
          },
          {
            Header: 'Export/Import',
            accessor: 'name', 
            Cell: row => (
              <div style={{textAlign: 'center'}}>
                <div
                  style={styles.importExportStyles}
                >
                <FaFileImport onClick={() => this.handleClick('File Import', row.value)}/>&nbsp;&nbsp;/&nbsp;&nbsp;
                <FaFileExport onClick={() => this.handleClick('File Export', row.value)}/>
                </div>
              </div>
            )
          },
          {
            Header: 'Brand',
            accessor: 'name',
            Cell: row => (
              <div style={{textAlign: 'center'}}>
                <div style={styles.actionStyles}>
                <FaPencilAlt onClick={() => this.handleClick('Edit', row.value)}/>&nbsp;&nbsp;
                <FaMinusCircle onClick={() => this.handleClick('Delete', row.value)}/>&nbsp;&nbsp;
                <FaCopy onClick={() => this.handleClick('Copy', row.value)}/>
                </div>
              </div>
            )
          },
        ]

      return (
          <div style={styles.containerStyle}>
            <SideNav/>
            <div style={styles.innerContainer}>
              <TopNav/>
              <Button className = "btn btn-success" style={styles.backButton} onClick={()=> this.props.history.push('/')}>Go Back</Button>
              <div style={styles.tableContainer}>
                <div>
                  <Button className = "btn btn-success" style={styles.buttonStyle}>ADD DIALOUGES</Button>
                </div>
                <ReactTable style={styles.tableStyle} columns={columns} data={tableData} pageSize={10}/>
              </div>  
            </div> 
          </div>
      )
    }
}

export function mapDispatchToProps(dispatch) {
	return {
      getListingData: () => dispatch(getListingData()),
      selectedCardTitle: (selectedCard) => dispatch(selectedCardTitle(selectedCard))
    }
}

export function mapStateToProps(state){
    return {
      details:state.data
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listing)