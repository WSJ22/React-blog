/**
 * Created by queen on 17-8-23.
 */
import React from 'react'
import Content from './Content'
require('../styles/person.css')
class Person extends React.Component{
  render(){
    return(
      <div className="container">
        <Content/>
        <div className="person">
          <div className="wrap">
            <div className="cube">
              <div className="font out"></div>
              <div className="back out"></div>
              <div className="top out"></div>
              <div className="bottom out"></div>
              <div className="left out"></div>
              <div className="right out"></div>

              <div className="font-in in"></div>
              <div className="back-in in"></div>
              <div className="top-in in"></div>
              <div className="bottom-in in"></div>
              <div className="left-in in"></div>
              <div className="right-in in"></div>
              <div className="clear"></div>
            </div>
          </div>
        </div>


        <span className="winnower-container">
          <img src={require("../images/winnower.png")} alt="" className="img-responsive1 winnower "/>
          <img src={require("../images/winnower-bottom.png")} alt="" className="img-responsive1 winnower-bottom"/>
		    </span>

        <span className="moon">
			    <img src={require("../images/moon.png")} alt="" className="img-responsive1"/>
		    </span>
        <span className="stars">
          <img src={require("../images/stars.png")} alt="" className="img-responsive1"/>
    		</span>
      </div>
        )
  }
}
export default Person
