import React from 'react';
import {ButtonComponent,NameSpaceComponent,PropExpression,PropString,PropComponent,PropComponentRight,PropComponentLeft,PropBool,PropSpread,
    ChildString,FirstChild,SecondChild,ChildComponent,ChildExpression,FalsyComponent} from './demo/jsx';

import {CreateClassComponent,ClassCompoennt,FnComponent,SingleComponent,Comment} from './demo/component';

import {ModifyProp,PropTypesComponent,ModifyState,UpdateStateAsync,SetStateCallback} from './demo/propstate';
    

export default class Container extends React.Component{
    render(){

        /***********jsx***********/

        //----------------------------------------------------使用jsx创建元素
        return (
            <div>
                <ButtonComponent size="xl" color="primary">我是一个小小的按钮组件</ButtonComponent>
            </div>
        )

        //----------------------------------------------------不使用jsx创建元素
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

        //----------------------------------------------------元素属性传递组件
        // return(
        //     <PropComponent right={<PropComponentRight />} left={<PropComponentLeft />} />
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

        //----------------------------------------------------组合组件
        // return(
        //     <div>
        //         <SingleComponent name='第一个' />
        //         <SingleComponent name='第二个' />
        //         <SingleComponent name='第三个' />
        //     </div>
        // )

        //----------------------------------------------------提取组件
        // const data={
        //     author:{
        //         avatarUrl:'https://avatars0.githubusercontent.com/u/6364903?v=4&s=40',
        //         name:'guozhaodong'
        //     },
        //     text:"提取组件是很有必要的",
        //     date:"2017-09-23"
        // }
        // return(
        //     <Comment {...data}/>
        // )

        /***********props and state***********/

        //----------------------------------------------------props在组件内不是不能修改的
        // return(
        //     <ModifyProp msg="I am ModifyProp" />
        // )

        //----------------------------------------------------使用`PropTypes`进行类型检查
        // return(
        //     <PropTypesComponent num={'dsfdsf'} />
        // )
        
        //----------------------------------------------------不要直接显示地更新组件的state
        // return(
        //     <ModifyState />
        // )

        //----------------------------------------------------状态的更新可能是异步的
        // return(
        //     <UpdateStateAsync />
        // )

        //----------------------------------------------------setState第二个参数回调函数
        // return(
        //     <SetStateCallback />
        // )
    }
}