/**
 * Created by queen on 17-8-23.
 */
import React from 'react'
import Content from './Content'
require('../styles/home.css')
class Home extends React.Component{
  render(){
    return(
      <div>
        <Content/>
        <div className="home">
          <div className="box clear">
            <img src={require('../images/borders1.png')}/>
            <marquee behavior="scroll" direction="up" class="scrollText" scrollamount="3">
              <p>亲爱的访客，您好！</p>
              <p>  &nbsp;&nbsp; &nbsp; &nbsp;    &nbsp;此网站是萌新，利用假期搭建的基于React框架的个人网站。由于技术方面和时间方面的原因，网站兼容性就暂时没精力去改善了，目前谷歌等主流浏览器是可以正常体验的，ie，手机端等是不存在的。哈哈，依据优雅降级原则，此网站的兼容性和其它功能会在日后的版本更新中体现。欢迎大神前来指教，也希望与志同道合的小伙伴们一起奋斗！</p>
            </marquee>
            <div className="intro">
              <div className="line">
                <h3>你好！我叫吴世娇</h3>
                <div className="rw-words">
                  <span>励志成为WEB前端工程师</span>
                  <span>喜欢酷炫的Web Skills</span>
                  <span>极其爱折腾，安静！</span>
                  <span>喜欢酷炫，传说中的女汉子</span>
                  <span>爱旅游，梦想走遍万水千山</span>
                  <span>志同道合的小伙伴快来认亲</span>
                </div>
                <hr className="split-line"/>
                <ul>
                  <li>
                    <ul  className="line-inblock">
                      <li>电话</li>
                      <li>18788870619</li>
                    </ul>
                  </li>
                  <li>
                    <ul className="line-inblock">
                      <li>地址</li>
                      <li>安徽合肥</li>
                    </ul>
                  </li>
                  <li>
                    <ul className="line-inblock">
                      <li>邮箱</li>
                      <li>1471686919@qq.com</li>
                    </ul>
                  </li>
                  <li>
                    <ul className="line-inblock">
                      <li>学校</li>
                      <li>安徽新华学院</li>
                    </ul>
                  </li>
                  <li>
                    <ul className="line-inblock">
                      <li>github</li>
                      <li className="address"><a target="_blank" href="https://github.com/WSJ22" title="https://github.com/guoaihua/main_project" className="link">点击进入</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Home
