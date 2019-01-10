import {LOGIN_SUCCESS} from './actionsTypes';

export default (state={}, action) => {
    switch(action.type){
        case LOGIN_SUCCESS:
            return {...state, token: action.token};
            break;
        default:
            return state;
    }
}