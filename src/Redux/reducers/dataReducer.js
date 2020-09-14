import {
  FETCH_DASHBOARD_DATA,
  FETCH_LISTING_DATA,
  SELECTED_SIDENAV_ITEM,
  SELECTED_CARD_TITLE
} from '../constants'

const initialState={
  dashboardData: [
    { id: 0, icon: "FaShieldAlt", title: 'Users' },
    { id: 1, icon: "FaChessKnight", title: 'Tags' },
    { id: 2, icon: "FaPuzzlePiece", title: 'Dialogues' },
    { id: 3, icon: "FaLaptopCode", title: 'Intents' },
    { id: 4, icon: "FaPuzzlePiece", title: 'Carriers' },
    { id: 5, icon: "FaChessKnight", title: 'Import histories' },
    { id: 6, icon: "FaShieldAlt", title: 'Permissions' },
  ],
  listingData: [
    {id: 0, name: 'Amazon', kind: 'MESSENGER', brand: 'HRA' },
    {id: 1, name: 'Debit collection test', kind: 'MESSENGER', brand: 'HRA' },
    {id: 2, name: 'Debit collections2', kind: 'MESSENGER', brand: 'HRA' },
    {id: 3, name: 'Esolar Bot', kind: 'MESSENGER', brand: 'HRA' },
    {id: 4, name: 'FEbot', kind: 'MESSENGER', brand: 'HRA' },
    {id: 5, name: 'Health', kind: 'MESSENGER', brand: 'HRA' },
    {id: 6, name: 'HealthGenVideo', kind: 'MESSENGER', brand: 'HRA' },
    {id: 7, name: 'HealthOpt', kind: 'MESSENGER', brand: 'HRA' },
    {id: 8, name: 'HealthSelf', kind: 'MESSENGER', brand: 'HRA' },
    {id: 9, name: 'HealthOptinbound', kind: 'MESSENGER', brand: 'HRA' },
    {id: 10, name: 'Health_Self_Remim', kind: 'MESSENGER', brand: 'HRA' },
  ],
  selectedCardTitle: null, 
  sideNavItem: 'Settings',
};

export default (state=initialState,action) => {
  switch(action.type) {
    case FETCH_DASHBOARD_DATA:
      return state;
    case FETCH_LISTING_DATA:
      return state
    case SELECTED_CARD_TITLE:
      return {...state,selectedCardTitle:action.payload}
    case SELECTED_SIDENAV_ITEM:
      return {...state,sideNavItem:action.payload}
    default:
      return state
  }
}