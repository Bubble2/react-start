import "@babel/polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import App from 'components/App';


const render = (App) => {
    ReactDOM.render(
        <AppContainer>
            <App />
        </AppContainer>,
        document.getElementById('root')
    )
}

render(App);

//热模块替换
if(module.hot){
    module.hot.accept('components/App', ()=>{
        render(App);
    })
}


