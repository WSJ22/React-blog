/**
 * Created by queen on 17-8-24.
 */
import React from 'react'
import Content from './Content'
require('../styles/project.css')
class Project extends React.Component{
  render(){
    return(
      <div className="container">
        <Content/>
        <div className="project">
          <h1 className="text3d">我的项目</h1>
          <h4 className="address"><a href="https://github.com/WSJ22">以下项目均在github上发布，打滚求star</a> </h4>
          <div className="boxsOne box1">
            <div className="col-md-4  shadow">
              <img src="../images/project.jpg" alt="" className="img-responsive"/>
              <div className="mask">
                <a href="https://github.com/WSJ22/Who-are-we">我们是谁在线编辑器</a>
              </div>
            </div>
            <div className="col-md-4  shadow">
              <img src="../images/project.jpg" alt="" className="img-responsive"/>
              <div className="mask">
                <a href="https://github.com/WSJ22/react-map">基于react实现的美团酒店</a>
              </div>
            </div>
            <div className="col-md-4  shadow">
              <img src="../images/project.jpg" alt="" className="img-responsive"/>
              <div className="mask">
                <a href="https://github.com/WSJ22/BookManage-master">Node+Mongodb实现图书管理系统</a>
              </div>
            </div>
            <div className="clear"></div>
          </div>
          <div className="boxsTwo box1">
            <div className="col-md-4  shadow">
              <img src="../images/project.jpg" alt="" className="img-responsive"/>
              <div className="mask">
                <a href="https://github.com/WSJ22/QQForStlab-master">Angularjs防QQ 列表的使用</a>
              </div>
            </div>
            <div className="col-md-4  shadow">
              <img src="../images/project.jpg" alt="" className="img-responsive"/>
              <div className="mask">
                <a href="https://github.com/WSJ22/Qzone">Qzone-时光轴效果</a>
              </div>
            </div>
            <div className="col-md-4  shadow">
              <img src="../images/project.jpg" alt="" className="img-responsive"/>
              <div className="mask">
                <a href="https://github.com/WSJ22/gall-react">照片墙效果的实现</a>
              </div>
            </div>
            <div className="clear"></div>
          </div>

        </div>
      </div>
    )
  }
}
export default Project;
