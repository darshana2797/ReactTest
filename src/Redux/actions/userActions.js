import {
    FETCH_DASHBOARD_DATA, 
    FETCH_LISTING_DATA,
    SELECTED_CARD_TITLE,
    SELECTED_SIDENAV_ITEM
} from '../constants';

export const getDashboardData = () =>{
    return{
        type:FETCH_DASHBOARD_DATA,
    }
}

export const getListingData = () =>{
    return{
        type:FETCH_LISTING_DATA,
    }
}

export const selectedSidenavItem = (itemName) =>{
    return{
        type:SELECTED_SIDENAV_ITEM,
        payload:itemName
    }
}

export const selectedCardTitle = (selectedCardTitle) =>{
    return{
        type:SELECTED_CARD_TITLE,
        payload:selectedCardTitle
    }
}
