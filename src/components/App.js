import React from 'react';

import Comment from './Comment';

class App extends React.Component {

	state = {
		Json:[]
	}
	renderForm = () => {
		const Json = [...this.state.Json];
		Json.push({
			id:0,
			visible:false,
			name:"first name",
			value:undefined,
			dataType: []
						});
		this.setState({Json});
	}
	getValues = (key, id, arrayIndex, json) =>  {
		const Json = [...this.state.Json];
		const name = json["textRef"];
		const value = json["valueRef"];
		const status = json["statusRef"];
		let index = Number(id);
		let data = Json[0];
			for(let i = 0; i < index ; i++) {
				data = data.dataType[0];
			}
			switch(status) {
	  		case "boolean":
				console.log("bool")					
	    	break;
	    	case "text":
	    		console.log("texto")
	    	break;
	    	case "number":
	    		console.log(value)
	    	break;
	    	case "date":
	    		console.log("date")
	    	break;
	 		 default:
		}
	}
	handlClick = (key, id, arrayIndex, json) =>  {
		const Json = [...this.state.Json];
		const name = json["textRef"];
		const value = json["valueRef"];
		const status = json["statusRef"];
		let index = Number(id);
		let data = Json[0];
			for(let i = 0; i < index ; i++) {
				data = data.dataType[0];
			}
			switch(status) {
	  		case "boolean":
				console.log("bool")					
	    	break;
	    	case "text":
	    		console.log("texto")
	    	break;
	    	case "number":
	    		console.log("numero");
	    	break;
	    	case "date":
	    		console.log("date")
	    	break;
	    	case "structure":
	    	console.log("object")
	    	break;
	    	case "array":
	    	console.log("tableaus")
	    		data.dataType.push({
	    						id:`${index + 1}`,
								visible:true,
								name:name,
								value: value,
								dataType:[]});
	    	break;
	 		 default:
		}


			this.setState({Json: Json})
	}

	render() {
		return (	
			<div>
				<ul>
					{this.state.Json.map((comment, i) =>
						<Comment 
							Json={comment}
							key={i}
							id={i}
							handlClick={this.handlClick}
							getValues={this.getValues}
						/>
						)}
				</ul>
				<button onClick={this.renderForm}>add state</button>

			</div>
			)
	}
}

export default App; 