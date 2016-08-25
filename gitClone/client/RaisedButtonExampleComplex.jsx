import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';
import { Link } from "react-router";

import Dash from './Dash.jsx';
const styles = {
  
};

var RaisedButtonExampleComplex = React.createClass( {
	render: function(){
		return(
				<a className="button">
				  	<Link to="./Dash" ><RaisedButton>List Repositories</RaisedButton></Link>     
				 </a>
			);
	}
});

module.exports = RaisedButtonExampleComplex;