import React from 'react'
import BodyIndex from './bodyIndex'

class Index extends React.Component {
	constructor() {
		super()
		this.state = {
			username: '这是爷',
			age: '这是爷的年纪 20'
		}
	}
	render() {
		return(
			<div>
        <h1>这是首页</h1>
        <BodyIndex {...this.state} userid={this.state.age}  username={this.state.username}/>
      </div>
		);
	}
}

export default Index