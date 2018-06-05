import React from 'react'

class BodyChild extends React.Component {
	render() {
		return(
			<div>
				<p>子页面输入:
					<input type="text" onChange={this.props.handleChildValueChange}/>
				</p>
				
				<p>{this.props.username},{this.props.id},{this.props.age}</p>
				
      </div>
		);
	}
}

export default BodyChild