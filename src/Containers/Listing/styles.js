
const styles = {
  containerStyle: {
    backgroundColor: 'aliceblue', 
    width: '100vw', 
    minHeight: '100vh', 
    height: 'auto',
    display: 'flex', 
  },
  innerContainer: {
    flexDirection: 'column', 
    width: 'calc(100vw - 60px)',
    height: 'auto'
  },
  backButton: {
    margin: '10px',
    width: '150px',
    height: 'auto',
    fontSize: '12px',
    marginRight: '50px',
    bottom: 0
  },
  buttonStyle: {
    borderRadius: '50px',
    float: 'right',
    width: '150px',
    height: 'auto',
    fontSize: '12px',
    marginRight: '50px',
    bottom: 0
  },
  tableContainer: {
    display: 'flex',
    width: 'fit-content',
    height: 'auto',
    flexDirection: 'column',
    marginTop: '50px'
  },
  tableStyle: {
    width: '90vw', 
    margin: '10px 50px 10px 50px', 
    backgroundColor: 'white', 
    borderRadius: '10px'
  },
  kindStyle: {
    width: '70%',
    height: '100%',
    backgroundColor: 'purple',
    color: 'white',
    fontSize: '12px',
    borderRadius: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  importExportStyles: {
    width: '70%',
    height: '100%',
    color: 'purple',
    fontSize: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionStyles: {
    width: '70%',
    height: '100%',
    color: 'purple',
    fontSize: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export default styles;