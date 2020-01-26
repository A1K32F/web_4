import React from 'react';
import ReactDOM from 'react-dom';
import CandidateForm from './CandidateForm';
import * as serviceWorker from './serviceWorker';
import Navbar from "./Navbar";

window.$candidate=[];
window.$education=[];
window.$knowledge=[];
window.$other=[];

ReactDOM.render(<Navbar/>, document.getElementById("nav"));
ReactDOM.render(<CandidateForm/>, document.getElementById("root"));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
