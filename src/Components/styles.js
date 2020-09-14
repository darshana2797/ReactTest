
const styles = {
  containerStyle: {
    backgroundColor: 'aliceblue', 
    width: '100vw', 
    minHeight: '100vh', 
    height: 'auto',
    display: 'flex', 
  },
  sideNavbar: {
    width: '60px', 
    minHeight:'100vh', 
    height: 'auto',
    backgroundColor: 'purple', 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center',
  },
  iconContainer: {
    height: '70px',
    backgroundColor: 'transparent',
    borderColor:'transparent',
  },
  buttonBadge: {
    backgroundColor: '#fa3e3e',
    borderRadius: '7px',
    color: 'white',
    padding: '2px',
    fontSize: '10px',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  topNavbar: {
    width:'100%', 
    height: '60px', 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    display: 'flex', 
    alignItems: 'center'
  },
  title: {
    color: 'purple',
    fontSize: '20px',
    paddingLeft: '10px',
    float: 'left'
  },
  rightNavbarDataStyle: {
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    float: 'right'
  },
  username: {
    margin: '10px 20px 10px 10px',
    fontSize: '18px',
  }
};

export default styles;