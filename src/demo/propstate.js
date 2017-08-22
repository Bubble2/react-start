import React from 'react';

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
            counter:this.state.counter + this.props.increase,
            date:new Date()
        })
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

