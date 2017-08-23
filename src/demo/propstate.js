import React from 'react';
import PropTypes from 'prop-types';

export const ModifyProp = (props) => {
    //props.msg='the val is modified';
    return (
        <div>{props.msg}</div>
    )
}

export class ModifyState extends React.Component{
    constructor(props){
        super(props);
        this.state={
            msg:'Hello'
        }
        this.clickHandle=this.clickHandle.bind(this);
    }
    clickHandle(){
        //this.state.msg='Hi';
        this.setState({
            msg:'Hi'
        })
    }
    render(){
        return (
            <div>
                <button onClick={this.clickHandle}>点我改变文字</button>
                {this.state.msg}
            </div>
            
        )
    }
}

export const PropTypesComponent = (props) =>{
    return(
      <div>{props.num}</div>
    )
}

PropTypesComponent.propTypes={
    num : PropTypes.number
}

export class UpdateStateAsync extends React.Component{
    constructor(props){
        super(props);
        this.state={
            counter:0
        }
        this.clickHandle=this.clickHandle.bind(this);
    }
    clickHandle(){
        this.setState({
            counter: this.state.counter +1 
        })

        this.setState({
            counter: this.state.counter +1 
        })

        // this.setState((prevState)=>{
        //     return {counter: prevState.counter +1 }
        // })

        // this.setState((prevState)=>{
        //     return {counter: prevState.counter +1 }
        // })
    }
    render(){
        return (
            <div>
                <button onClick={this.clickHandle}>按钮</button>
                {this.state.counter}
            </div>
            
        )
    }
}



export class SetStateCallback extends React.Component{
    constructor(props){
        super(props);
        this.state={
            counter:0
        }
        this.clickHandle=this.clickHandle.bind(this);
    }
    clickHandle(){
        this.setState((prevState)=>{
            return {counter:prevState.counter + 1} 
        },()=>{
            console.log('回调中显示counter值：'+this.state.counter)
        })
        console.log('直接显示counter值：'+this.state.counter)
    }
    render(){
        return (
            <div>
                <button onClick={this.clickHandle}>按钮</button>
                <div>{this.state.counter}</div>
            </div>
            
        )
    }
}

