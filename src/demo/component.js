import React from 'react';

export const CreateClassComponent = React.createClass({
    getDefaultProps(){
      return {
        color: 'blue',
        text: 'Confirm'
      }
    },
    render(){
      const {color,text}=this.props;
  
      return (
        <button className={`btn btn-${color}`}>
          <span>{text}</span>
        </button>
      );
    }
})

export class ClassCompoennt extends React.Component{
    constructor(props){
      super(props);
    }
  
    static defaultProps={
      color:'blue',
      text:'Confirm'
    }
  
    render(){
      const {color,text}=this.props;
      return (
        <button className={`btn btn-${color}`}>
          <span>{text}</span>
        </button>
      )
    }
}

export function FnComponent({color='blue',text='Confirm'}){
    return (
      <button className={`btn btn-${color}`}>
        <span>{text}</span>
      </button>
    )
}


export function SingleComponent(props){
    return <h1>{props.name}组件</h1>
}


function Avatar(props){
    return(
      <img className="avatar" src={props.user.avatarUrl} alt={props.user.name} />
    )
}

function UserInfo(props){
    return(
      <div className="userinfo">
          <Avatar user={props.user} />
          <div className="userinfo-name">{props.user.name}</div>
      </div>
    )
}

export function Comment(props){
    return(
      <div className="comment">
        <UserInfo user={props.author} />
        <div className="comment-txt">{props.text}</div>
        <div className="comment-text">{props.date}</div>
      </div>
    )
}