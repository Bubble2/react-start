import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {Form, Icon, Input, Button} from 'antd';
import {login} from '../actions'; 

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class FormDemo extends React.Component{
    constructor(){
        super(...arguments);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.form.validateFields();
    }

    handleSubmit(e){
        e.preventDefault();
        const {login} = this.props;
        this.props.form.validateFields((err, values) => {
            if(!err){
                login({
                    username: values.userName,
                    password: values.password
                })
                console.log('Received values of form:', values);
            }
        })
    }

    render(){
        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;

        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <h1>DEMO1:</h1>
                <Form.Item validateStatus={userNameError?'error':null} help={userNameError || ''}>
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
                <Form.Item validateStatus={passwordError?'error':null} help={passwordError || ''}>
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
                    <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>Log in</Button>
                </Form.Item>
            </Form>
        )
    }
}

const Demo1 = Form.create()(FormDemo)


const mapStateToProps = state => {
    return {
        loginInfo: state.loginInfo
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        login
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Demo1);