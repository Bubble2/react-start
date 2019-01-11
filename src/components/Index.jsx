import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
import { Route, NavLink } from 'react-router-dom'

import 'style/theme.less'
import 'style/common.less'

import Home from 'components/Home'
import FormDemo from 'components/Demo1'
import FormDemo2 from 'components/Demo2'
import FormDemo3 from 'components/Demo3'

const { Header, Footer, Sider, Content } = Layout

export default class Index extends Component {
	render() {
		return (
			<div>
				<Layout>
					<Header className="header">
						<Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
							<Menu.Item key="1">
								<NavLink to="/">首页</NavLink>
							</Menu.Item>
							<Menu.Item key="2">
								<NavLink to="/demo">DEMO1</NavLink>
							</Menu.Item>
							<Menu.Item key="3">
								<NavLink to="/demo2">DEMO2</NavLink>
							</Menu.Item>
							<Menu.Item key="4">
								<NavLink to="/demo3">DEMO3</NavLink>
							</Menu.Item>
						</Menu>
					</Header>
					<Layout>
						<Sider className="sider">Sider3333</Sider>
						<Content>
							<Route exact path="/" component={Home} />
							<Route path="/demo" component={FormDemo} />
							<Route path="/demo2" component={FormDemo2} />
							<Route path="/demo3" component={FormDemo3} />
						</Content>
					</Layout>
					<Footer>Footer</Footer>
				</Layout>
			</div>
		)
	}
}
