/**
 * Created by queen on 17-8-23.
 */
import React from 'react'
import { Link } from 'react-router'
require('../styles/content.css')
class Content extends React.Component{
  handleStop(){
    alert("dd")
  }
  render(){

    return(
      <div className="container">
        <div className="header">
          <h1 className="logoname">WSJ Queen</h1>
          <ul>
            <li><Link to={'/Contact'}>联系我</Link></li>
            <li><Link to={'/Artical'}>个人介绍</Link></li>
            <li><Link to={'/Project'}>项目展示</Link></li>
            <li><Link to={'/Person'}>图片欣赏</Link></li>
            <li><Link to={'/'}>主页</Link></li>
          </ul>
        </div>
        <span class="music-fly" onClick={this.handleStop.bind(this)}/>
      </div>
    )
  }
}
export default Content;
