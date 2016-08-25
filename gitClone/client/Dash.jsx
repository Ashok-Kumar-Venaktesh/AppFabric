import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';
import { Link } from "react-router";

const styles = {
  
};
var Dash = React.createClass({
	
	getInitialState: function () {
		return {user:{},user_repo:{},reposName:[]};
	},


	componentWillMount() {
	
	    $.ajax({
	        url: 'https://api.github.com/user?access_token=0c4f574acdc0b19af3ed50a069ab581121771535',
	        context: this,
	        dataType: 'json',
	        type: 'GET'
	    }).done(function (data) {
			this.setState({user: data});
			$.ajax({
		        url: data["repos_url"],
		        context: this,
		        dataType: 'json',
		        type: 'GET'
				}).done(function (data) {
						console.log(data);
					this.setState({user_repo: data});
					var a = [];
					data.forEach(function(d){
						console.log(d.name);
						a.push(d.name);
						console.log("Array",a);
						
					});
					this.setState({reposName: a});
					console.log("Repository names are",this.state.reposName);
				});				
			});
	},
    render: function () {
		console.log("repos "+this.state.reposName);
		var arr=[];

		for(let key in this.state.user) 
		{
			arr.push(this.state.user[key]);
		}

		var key = this.state.reposName.map(function (name, index) {
		        return (<p>{name}</p>);
		});
		
		return(
		  <div className="button">
			<div>
			  <h1>Routed!!!</h1>
			  {key}
			</div>
			
		  </div>
		)
	}
});

export default Dash;