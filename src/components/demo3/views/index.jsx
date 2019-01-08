import React from 'react';
import {Form, Icon, Input, Button} from 'antd';

let index = 0;
const data = [
    {
        id: 121312322,
        value: 'hell0'
    },
    {
        id: 121312333,
        value: 'world'
    },
    {
        id: 121312333,
        value: 'w2222orld'
    },
    {
        id: 121312333,
        value: 'wor3333ld'
    }
]
class FormDemo3 extends React.Component{
    constructor(){
        super(...arguments);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if(!err){
                console.log('Received values of form2:', values);
            }
        })
    }

    removeItem(k){
        const {getFieldValue, setFieldsValue} = this.props.form;
        const keys = getFieldValue('keys');
        setFieldsValue({
            keys: keys.filter(key => key != k)
        })
    }

    addItem(){
        const {getFieldValue, setFieldsValue} = this.props.form;
        const keys = getFieldValue('keys');
        setFieldsValue({
            keys: keys.concat(index)
        })
        index++;
    }

    componentWillMount(){
        const COUNT = 3;
        //设置初始数组
        this.formKeys = []; 

        let loopNum = COUNT;
        if(data && data.length > COUNT){
            loopNum = data.length;
        }

        for(let i=0; i<loopNum; i++){
            this.formKeys.push(index);
            index++;
        }
    }

    render(){
        const {getFieldDecorator, getFieldValue} = this.props.form;

        getFieldDecorator('keys', { initialValue: this.formKeys});
        const keys = getFieldValue('keys');
        const formItems = keys.map((k, index) => {
            return (
                <Form.Item 
                    key={k}>
                    {
                        getFieldDecorator(`prods[${k}].prodName`,{
                            initialValue: data&&data.length>0&&data[k]?data[k]['value']:'',
                            rules:[
                                {
                                    required: true,
                                    message:'此项为必填项'
                                }
                            ]
                        })(<Input />)
                    }
                    {
                        keys.length>1?<Icon type="minus-circle-o" onClick={this.removeItem.bind(this, k)}></Icon>: null
                    }
                </Form.Item>
            )
        })
        return (
            <Form onSubmit={this.handleSubmit} style={{'width':'300px'}}>
                <h1>DEMO3</h1>
                {formItems}
                <Form.Item>
                    <Button type="dashed" onClick={this.addItem}>
                        <Icon type="plus"></Icon>
                        新增一项
                    </Button>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">提交</Button>
                </Form.Item>
            </Form>
        )
    }
}

export default Form.create()(FormDemo3);