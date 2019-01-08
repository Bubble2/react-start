import React from 'react';
import {Form, Icon, Input, Button, Checkbox} from 'antd';

class FormDemo2 extends React.Component{
    constructor(){
        super(...arguments);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if(!err){
                console.log('Received values of form2:', values);
            }
        })
    }

    render(){
        const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} style={{'width':'300px'}}>
                <h1>DEMO2</h1>
                <Form.Item>
                    {
                        getFieldDecorator('userName',{
                            rules: [
                                {
                                    required: true,
                                    message: '用户名不能为空'
                                }
                            ]
                        })(
                            <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}} />}/>
                        )
                    }
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password',{
                        rules: [
                            {
                                required: true,
                                message: '密码不能为空'
                            }
                        ]
                    })(<Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} />)}
                </Form.Item>
                <Form.Item>
                    {
                        getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true
                        })(<Checkbox>记住密码</Checkbox>)
                    }
                    <a href="" className="login-form-forget">忘记密码？</a>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">Log in</Button>
                </Form.Item>
            </Form>
        )
    }
}

export default Form.create()(FormDemo2);