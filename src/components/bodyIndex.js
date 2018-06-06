import React from 'react'
import BodyChild from './bodyChild'
import PropTypes from 'prop-types' // 类型验证

import ReactMixin from 'react-mixin'
import MixinLog from './mixins'
import styles from './css.css'
console.log(styles, 99999)

const defaultProps = {
	xiaoC: '这是默认属性'
}

export default class BodyIndex extends React.Component {
	constructor() {
		super()
//		this.state = {
//			username: '憨豆豆',
//			age: 20
//		}
	};
	changeUserInfo(age) {
		this.setState({
			username: age
		})
		MixinLog.log()
	};
	handleChildValueChange(ev) {
		this.setState({
			username: ev.target.value
		})
	};
	render() {
		return(
			<div>
        <h1 className={styles.app}>主体内容</h1>
        <p>{this.props.userid},{this.props.username}</p>
        <p>{this.props.xiaoC}</p>
        <input type="button" value="提交" onClick={this.changeUserInfo.bind(this,'ascascsad')}/>
        <BodyChild {...this.props} id={'测试所有属性传递'} handleChildValueChange={this.handleChildValueChange.bind(this)}/>
      </div>
		);
	}
}

BodyIndex.propTypes = {
	userid: PropTypes.number
}
BodyIndex.defaultProps = defaultProps

ReactMixin(BodyIndex.prototype, MixinLog)

