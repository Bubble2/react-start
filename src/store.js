import {combineReducers} from 'redux';
import {reducer as loginInfo} from 'components/Demo1'


const rootReducer = combineReducers({
    loginInfo
})

export default rootReducer;