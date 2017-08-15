import React from 'react';
import ReactDOM from 'react-dom';

export default class Hello extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2> 
            </div>
        )
    }
}
