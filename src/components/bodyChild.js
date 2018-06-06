import React from 'react'
import styles from './css1.css'

class BodyChild extends React.Component {
	render() {
		return(
			<div>
				<p className={styles.app}>子页面输入:
					<input type="text" onChange={this.props.handleChildValueChange}/>
				</p>
				
				<p>{this.props.username},{this.props.id},{this.props.age}</p>
				
      </div>
		);
	}
}

export default BodyChild