import React from 'react';

import Comment from './Comment';

class App extends React.Component {
	
	state = {
		Json:{
			  body :'level 1',
			  comments: [
				{
					body: 'level 2',
					comments: [
						{
							body: 'level 3',
							comments: [
								{
									body: 'level 4',
									comments: [
										{
											body: 'level 6',
											comments: [
											]
										}
									]
								}
							]
						}
					]
				}
				]}
	}
	render() {
		return (	
			<div>
				<ul>
					{Object.keys(this.state.Json).map((key, index) =>
						<Comment 
							key={key}
							json={this.state.Json[key]}
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