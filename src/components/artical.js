/**
 * Created by queen on 17-8-25.
 */
import React from 'react'
import Content from './Content'
require('../styles/artical.css')
import { ProgressBar } from 'react-bootstrap'

class Artical extends React.Component{
  render(){
    return(
      <div className="container">
        <Content/>
        <div className="article">
          <h1 className="text-white title">自我介绍</h1>
          <div className="content">
            <div className="content-main text-white">
              你好，我叫吴世娇，今年22岁。就读于安徽新华学院，对计算机领域的学习有着浓厚的兴趣，更对前端情有独钟。对互联网新技术的学习充满着热爱，能快速掌握新技术开发。自学能力强，做事专注，喜欢安静的思考。喜欢挑战，爱折腾。怀着一个所有程序员的梦想，改变世界！心之所向，无往不利！
            </div>
            <div className="clear"></div>
            <div className="skills col-md-5 col-sm-12">
              <h2 className="skill-title">SKILL FOR WSJ</h2>
              <ProgressBar striped bsStyle="success" now={85} label={`HTML/CSS3`}/>
              <ProgressBar striped bsStyle="info" now={70} label={`BOOTSTRAP`}/>
              <ProgressBar striped bsStyle="warning" now={65} label={`JQUERY`}/>
              <ProgressBar striped bsStyle="danger" now={60} label={`NODE`}/>
              <ProgressBar striped bsStyle="success" now={80} label={`JAVASCRIPT`}/>
              <ProgressBar striped bsStyle="info" now={70} label={`EXPRESS/MONGODB`}/>
              <ProgressBar striped bsStyle="warning" now={75} label={`REACT`}/>
              <ProgressBar striped bsStyle="danger" now={60} label={`REACT NATIVE`}/>
              <ProgressBar striped bsStyle="warning" now={55} label={`GIT`}/>
              <ProgressBar striped bsStyle="danger" now={60} label={`Angular`}/>
            </div>
          </div>

       </div>
        <span className="stars">
          <img src={require("../images/stars.png")} alt="" className="img-responsive"/>
    		</span>
      </div>
    )
  }
}
export default Artical
