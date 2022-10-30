// Major imports
import React, { Component } from "react";
import { connect } from "react-redux";
// file imports (Components first and then the stylings)
import "./about.css";
// Class based page
class About extends Component {
 constructor(props) {
  super(props);
  // this.data1 = useSelector((state) => state.data1.value);
  // this.dispatch = useDispatch();
 }

 render() {
  return <div>About page</div>;
 }
}
// const useSelector = (state) => ({ data2: state.data2 });
// const remove = {
//  remove,
// };

// https://codesandbox.io/s/r1kqd :-  For knowing how to work in React class with redux.

export default About;
