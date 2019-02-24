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
		getValues = (e) => {
			e.preventDefault();
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

		console.log(this.visible);
	}

	render() {
		let visible = false;
		return (
				<ul>
					<li onClick={this.handleClick}>
						<form>
							<input type="text" placeholder="Text" ref={this.textRef} />
							<select name="valeur"  ref={this.statusRef} onChange={this.toggleVisibility}>
								<option value="text">text</option>
								<option value="boolean">Boolean</option>
								<option value="number">Number</option>
								<option value="structure">Structure</option>
								<option value="array">Array</option>
								<option value="date">Date</option>
							</select>
							<input type="text" placeholder="Value" ref={this.valueRef}  style={{display: this.visible ? 'none' : 'inline-block'}} />
							<button  type="submit" style={{display: this.visible ? 'inline-block' : 'none'}} onClick={this.handlClick} >Add</button>
							<button onClick={this.getValues} style={{display: this.visible ? 'none' : 'inline-block'}} >Submit</button>
					</form>
					</li>
						<ul>
							{this.props.Json.dataType.map((comment, i) => 
								<Comment 
								Json={comment}
								key={i}
								id={i}
								handlClick={this.props.handlClick}
								getValues={this.props.getValues}
								/>
							)}
						</ul>
				</ul>
			)
	}
}

export default Comment