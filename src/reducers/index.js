import dataReducer from './dataReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
        data: dataReducer    
});


export default allReducers;