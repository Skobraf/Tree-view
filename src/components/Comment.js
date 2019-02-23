import React from 'react';

class Comment extends React.Component {
	statusRef = React.createRef();
	textRef = React.createRef();
	valueRef = React.createRef();

	handleClick = () => {
		this.setState({visible: false})
	}
	handlClick = (e) => {
		e.preventDefault();
		const textRef = this.textRef.current.value;
		const id = this.props.Json["id"]
		const index = this.props.id;
		const json = {
			statusRef: this.statusRef.current.value,
			textRef: this.textRef.current.value,
			valueRef:this.valueRef.current.value
		}
		this.props.handlClick(textRef, id, index, json);
	}
		getValues = () => {
		const textRef = this.textRef.current.value;
		const id = this.props.Json["id"]
		const index = this.props.id;
		const json = {
			statusRef: this.statusRef.current.value,
			textRef: this.textRef.current.value,
			valueRef:this.valueRef.current.value
		}
		this.props.getValues(textRef, id, index, json);
	}

	toggleVisibility = () => {
		if (this.statusRef.current.value ==="array" || this.statusRef.current.value ==="structure" ) {
			this.visible = true;
		}
		else this.visible = false;
		
	}
	
	render() {
		let visible = false;
		let data;
				if(Array.isArray(this.props.Json.dataType)) {
					data	 = 	this.props.Json.dataType.map((comment, i) => 
								<Comment 
								Json={comment}
								key={i}
								id={i}
								handlClick={this.props.handlClick}
								getValues={this.props.getValues}
								/>
							)
				}
		return (
				<ul>
					<li onClick={this.handleClick}>
						<form onSubmit={this.handlClick}>
							<input type="text" placeholder="Text" ref={this.textRef} />
							<select name="valeur"  ref={this.statusRef} onChange={this.toggleVisibility}>
								<option value="text">text</option>
								<option value="boolean">Boolean</option>
								<option value="number">Number</option>
								<option value="structure">Structure</option>
								<option value="array">Array</option>
								<option value="date">Date</option>
							</select>
							<input type="text" placeholder="Value" ref={this.valueRef} onChange={this.getValues} style={{display: !this.props.visible ? 'inline-block' : 'none'}} />
							<button  type="submit" style={{display: this.visible ? 'inline-block' : 'none'}}>add</button>
					</form>
					</li>
						<ul>
							{data}
						</ul>
				</ul>
			)
	}
}

export default Comment;