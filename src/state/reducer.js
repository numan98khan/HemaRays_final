// import database from '@react-native-firebase/database';
// import storage from '@react-native-firebase/storage';

import * as types from './TYPES'
import { act } from 'react-test-renderer';

const ds = [];
const INITIAL_STATE = {
    loading: true, 
    dataSourceSearch: ds,
    dataSourceFilter: ds,
    dataSourceDup: ds,
    dataCategoryDup: ds,
    dataCategorySearch: ds,
    search: '',
    isFilterOn: false,
    category: 'NONE',
    isFilterVisible: false,
    currentScreen:'',
    isSearchBar:false,
    userObj:null,
    // appMode: 'buyer',
    appMode: 'seller',
    specials: ds,
    currentCart:[],
    liveProductList:[]
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.UPDATE_PRODUCTS:
        // console.log('user reducer > '+ action.payload.userObj.uid);
        return Object.assign({}, state, {
            liveProductList: action.payload.liveProductList,
        });
    case types.TOGGLE_MODE:
        console.log('TOGGLE_MODE reducer > ' + state.appMode);
        var modeSend;
        if (state.appMode === 'seller') {
            modeSend = 'buyer'
        } else {
            modeSend = 'seller'
        }
        return Object.assign({}, state, {
            appMode: modeSend,
        });
    default:
      return state
  }
};

export default productReducer