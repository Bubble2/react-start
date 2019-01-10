import axios from 'axios';
import {LOGIN_SUCCESS} from './actionsTypes';

const loginSuccess = (token) => ({
    type: LOGIN_SUCCESS,
    token
});


export const login = ({username, password}) => dispatch => {
    axios.get('/api/login').then(function(res){
        if(res.data && res.data.success){
            dispatch(loginSuccess(res.data.token));
        }
    })
}
