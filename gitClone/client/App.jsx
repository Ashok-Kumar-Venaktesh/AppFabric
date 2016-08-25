import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButtonExampleComplex from './RaisedButtonExampleComplex.jsx';
import {Router,Route,IndexRoute,hashHistory,Link} from "react-router";
import Dash from './Dash.jsx';

 
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();


const App = () => (
  <MuiThemeProvider>
    <RaisedButtonExampleComplex />
  </MuiThemeProvider>
);
 
ReactDOM.render(
<Router history={hashHistory}>
<Route path="/" component={App}></Route>
<Route path="./Dash" component={Dash}></Route>
</Router>,  
  document.getElementById('container')
);