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