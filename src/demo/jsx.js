import React from 'react';

export const ButtonComponent= (props) => {
    return(
        <div>{props.children}</div>
    )
}

export const NameSpaceComponent = {
    DatePicker(){
        return (
            <div>I am a NameSpaceComponent.DatePicker</div>
        )
    }
}

export const PropExpression = (props) => {
    return (
        <div>
            {props.title}
        </div>
    )
}

export const PropString = (props) => {
    return (
        <div>
            {props.msg}
        </div>
    )
}

export const PropComponentRight = () => {
    return(
        <div>我是右边的组件</div>
    )
}

export const PropComponentLeft = () => {
    return(
        <div>我是左边的组件</div>
    )
}

export const PropComponent = (props) => {
    return(
        <div>
            <div style={{"float":"left","width":"33.3%"}}>{props.left}</div>
            <div style={{"float":"left","width":"33.3%"}}>我是中间内容</div>
            <div style={{"float":"right","width":"33.3%"}}>{props.right}</div>
        </div>
    )
}


export const PropBool = (props) => {
    return (
        <div>
            {props.msg && 'msg is true'}
        </div>
    )
}

export const PropSpread = (props) => {
    return (
        <div>
            <p>{props.title}</p>
            <p>{props.name}</p>
        </div>
    )
}

export const ChildString = (props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export const FirstChild = (props) => {
    return (
        <div>
            I am FirstChild
        </div>
    )
}

export const SecondChild = (props) => {
    return (
        <div>
            I am SecondChild
        </div>
    )
}

export const ChildComponent = (props) => {
    return (
        <div>
            I am parent component
            {props.children}
        </div>
    )
}

export const ChildExpression = (props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}


export const FalsyComponent = () => {
    return (
        <div>
            <div>If you see this,the value is true</div>
        </div>
    )
}



