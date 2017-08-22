import React from 'react';
import {ButtonComponent,NameSpaceComponent,PropExpression,PropString,PropBool,PropSpread,
    ChildString,FirstChild,SecondChild,ChildComponent,ChildExpression,FalsyComponent} from './demo/jsx';

import {CreateClassComponent,ClassCompoennt,FnComponent} from './demo/component';

import {ModifyProp,ModifyState,UpdateStateAsync} from './demo/propstate';
    

export default class Container extends React.Component{
    render(){

        /***********jsx***********/

        //----------------------------------------------------使用jsx创建组件
        // return (
        //     <div>
        //         <ButtonComponent size="xl" color="primary">我是一个小小的按钮组件</ButtonComponent>
        //     </div>
        // )

        //----------------------------------------------------不适用jsx创建组件
        // return React.createElement(
        //     ButtonComponent,
        //     {size:'xl',color:'primary'},
        //     '我也是一个小小的按钮组件'
        // )

        //----------------------------------------------------最外层只能有一个标签
        // return(
        //     <span>hello</span>
        //     <span>world</span>
        // )

        //----------------------------------------------------标签一定要闭合
        // return(
        //     <img>
        // )

        //----------------------------------------------------支持命名空间
        // return(
        //     <NameSpaceComponent.DatePicker />
        // )

        //----------------------------------------------------注释
        // return(
            
        //     // 这个是一个单行注释

        //     /*这是一个多行注释
        //     这是一个多行注释
        //     这是一个多行注释
        //     这是一个多行注释*/

        //     <div>
        //     {
        //     //这是一个单行注释
        //     }
            
        //     {/*这是一个多行注释
        //         这是一个多行注释
        //         这是一个多行注释
        //         这是一个多行注释*/}
            
        //         <h1>这是一个注释demo</h1>
            
        //     </div>
        // )


        //----------------------------------------------------元素属性传递`JavaScript`表达式
        // return(
        //     <div>
        //         <PropExpression title={1+2} />
        //         <PropExpression title={window.name?window.name:'window.name is null'}/>
        //     </div>
        // )

        //----------------------------------------------------元素属性传递字符串常量
        // return(
        //     <div>
        //         <PropString msg="hello1" />
        //         <PropString msg={"hello2"} />
        //     </div>
        // )

        //----------------------------------------------------元素属性传递布尔值
        // return(
        //     <div>
        //         <PropBool msg />
        //         <PropBool msg={true} />
        //     </div>
        // )

        //----------------------------------------------------元素属性传递扩展属性
        // const obj = {
        //     title:'I am title',
        //     name:'I am name'
        // }
        // return(
        //     <PropSpread {...obj} />
        // )

        //----------------------------------------------------子元素接受字符串常量
        // return(
        //     <ChildString>I am ChildString's children</ChildString>
        // )

        //----------------------------------------------------子元素接受子组件
        // return(
        //     <ChildComponent>
        //         <FirstChild></FirstChild>
        //         <SecondChild></SecondChild>
        //     </ChildComponent>
        // )

        //----------------------------------------------------子元素接受`JavaScript`表达式
        // return(
        //     <div>
        //         <ChildExpression>{'Hello'}</ChildExpression>
        //         <ChildExpression>{1+2}</ChildExpression>
        //         <ChildExpression>{window.name?<FirstChild />:<SecondChild />}</ChildExpression>
        //     </div>
        // )

        //----------------------------------------------------子元素布尔值、Null 和 Undefined 被忽略
        // return(
        //     <div>
        //         第一个div子元素为：<div />
        //         第二个div子元素为：<div></div>
        //         第三个div子元素为：<div>{true}</div>
        //         第四个div子元素为：<div>{false}</div>
        //         第五个div子元素为：<div>{null}</div>
        //         第六个div子元素为：<div>{undefined}</div>
        //     </div>
        // )

        //----------------------------------------------------除了`false`以外,0、""、null、undefined、NaN,也会认为是假，但是它们会把自身输出
        // const value=false;
        // return(
        //     <div>
        //         {value && <FalsyComponent />}
        //     </div>
        // )

        /***********component***********/

        //----------------------------------------------------React.createClass创建组件
        // return(
        //     <CreateClassComponent color="red" text="我是React.createClass创建的按钮" />
        // )

        //----------------------------------------------------ES6 classes创建组件
        // return(
        //     <ClassCompoennt color="red" text="我是es6classes创建的按钮" />
        // )

        //----------------------------------------------------无状态函数
        // const setting={
        //     color:"red" ,
        //     text:"我是普通函数创建的按钮"
        // }
        // return(
        //     <FnComponent  {...setting}/>
        // )

        /***********props and state***********/

        //----------------------------------------------------props在组件内不是不能修改的
        // return(
        //     <ModifyProp msg="I am ModifyProp" />
        // )
        
        //----------------------------------------------------不要直接显示地更新组件的state
        // return(
        //     <ModifyState />
        // )

        //----------------------------------------------------状态的更新可能是异步的
        return(
            <UpdateStateAsync increase={1} />
        )
    }
}