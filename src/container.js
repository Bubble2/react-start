import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './index';


export default class Container extends React.Component{
    render(){
        const prop={
            title:'Hello World!',
            subTitle:'This is my first react demo'
        }
        return (
            <Hello {...prop}/>
        )
    }
}