import React, {Component} from "react";
import ThreeEntryPoint from "../utils/ThreeEntryPoint";


export default class ThreeContainer extends Component {

    componentDidMount() {
      ThreeEntryPoint(this.scene);
    }
  
    render() {
      return (
        <>
         
          <div ref={element => this.scene = element} />
        </>
      );
    }
  }