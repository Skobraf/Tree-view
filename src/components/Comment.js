import React from 'react';

class Comment extends React.Component {
	//{this.props.Json['comments'].map((comment, i) => 
	//							<Comment 
	//							Json={comment}
	//							key={i}
	//							id={i}
	//							handlClick={this.props.handlClick}
	//							getValues={this.props.getValues}
	//							/>
	//						)}
	handleClick = () => {
		console.log(this.props.json)
	}
	render() {
		let visible = false;
		return (
				<ul>
					<li onClick={this.handleClick}>
						
					</li>
						<ul>
						</ul>
				</ul>
			)
	}
}

export default Comment;