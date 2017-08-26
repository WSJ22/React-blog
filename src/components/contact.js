/**
 * Created by queen on 17-8-25.
 */
import React from 'react'
import Content from './Content'
import { Button,Col} from 'react-bootstrap';
require('../styles/contact.css')
let Tools = {
  checkStates: function (response) {
    if(response.ok){
      return response
    }else{
      let error = new Error(response.statusText);
      error.state = response.status;
      error.response = response;
      throw error;
    }
  },
  parseJSON:function (response) {
    return response.json();
  },
  _getSearchFromObject:function(param, key) {

    if(param == null) return '';
    let _search = '?';
    for (let key in param) {
      _search += `${key}=${encodeURIComponent(param[key])}&`
    }
    return _search.slice(0, -1);
  },
}

class Contact extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name:'',
      QQ:'',
      Email:'',
      tel:'',
      content:''
    }
  }
  handelChange(e,key){
    var val=e.target.value;
    if (key === 'name') {
      this.setState({name: val});
    } else if (key === 'QQ') {
      this.setState({QQ: val});
    }else if (key === 'Email') {
      this.setState({Email: val});
    }else if (key === 'tel') {
      this.setState({tel: val});
    }else if (key === 'content') {
      this.setState({content: val});
    }
  }
  handleSubmit(){
    let reg = /^\s+$/;
    let input = this.state;
    switch (''){
      case input.name:
        alert('姓名不能为空');
        return;
        break;
      case input.email:
        alert('邮箱不能为空');
        return;
        break;
      case input.QQ:
        alert('QQ/微信不能为空');
        return;
        break;
      case input.tel:
        alert('手机号不能为空');
        return;
        break;
      case input.tel:
        alert('评论不能为空');
        return;
        break;
    }
    if(!(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(this.state.Email))){
      alert('邮箱格式不正确');
      return
    }
    if(!(/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(this.state.tel))){
      alert('手机格式不正确');
      return
    }

    function _request (_method,_api,_params,_onSuccess,_onError) {
      // console.log(_method)
      let _options = {
        method:_method,
        mode: "cors",
        headers:{
          // 'Accept':'application/json',
          'Content-Type':'application/json',
        },
        body:(_method == 'GET')? null:JSON.stringify(_params)
      };
      // console.log(_options,'123456');
      if(_method.toLowerCase() == 'get'){
        _api+=Tools._getSearchFromObject(_params)
      }
      fetch(_api,_options)
        .then(Tools.checkStates)
        .then(Tools.parseJSON)
        .then((data)=>{
          _onSuccess(data)
        })
        .catch((err)=>{
          console.log(err);
          if(err.state == 401){
            alert("登录过期,重新登录")
            location.hash = "login";
            return
          }
          if(err.response){
            err.response.json().then((data)=>{
              console.log(data)
              if(data.message)
                alert(data.message)
            })
          }
        })
    }
    let userInfo={
      name:this.state.name,
      Email:this.state.Email,
      tel:this.state.tel,
      QQ:this.state.QQ,
      content:this.state.content
    }
    _request('POST','http://www.guoaihua.com:3000/users/saveMessage',userInfo)
    alert("已将评论内容发送到主人邮箱")
    this.setState({
      name:'',
      QQ:'',
      tel:'',
      Email:'',
      content:''
    })
  }
  render(){
    return(
      <div className="container">
        <Content/>
        <div className="contact-content">
          <h1>联系我</h1>
          <div className="form">
            <input type="text" ref='name'
                   value={this.state.name} placeholder="姓名（必填）"
                   onChange={(e)=>{
                     this.handelChange(e,'name')
                   }}
            />
            <input type="text" ref='QQ'
                   value={this.state.QQ} placeholder="QQ/微信（必填）"
                   onChange={(e)=>{
                     this.handelChange(e,'QQ')
                   }}
            />
            <br/>
           <div className="nullCon"></div>
            <input type="text" ref='Email'
                   value={this.state.Email} placeholder="Email（必填）"
                   onChange={(e)=>{
                     this.handelChange(e,'Email')
                   }}
            />
            <input type="text" ref='tel'
                   value={this.state.tel} placeholder="电话（必填）"
                   onChange={(e)=>{
                     this.handelChange(e,'tel')
                   }}
            />
            <br/>
            <div className="nullCon"></div>
            <textarea type="text" ref='content'
                   value={this.state.content} placeholder="发送信息...必填）"
                   onChange={(e)=>{
                     this.handelChange(e,'content')
                   }}
            />
            <br/>
            <div className="nullCon"></div>
            <Button bsStyle="info" onClick={this.handleSubmit.bind(this)}>SUBMIT</Button>
          </div>
          <br/>
          <div className="footer">
            <Col sm={12} md={4}>
              <h1><span className="icon-location"></span>地址</h1>
              <p>安徽省宣城市孙埠镇</p>
            </Col>
            <Col sm={12} md={4}>
              <h1> <span className="icon-email"></span>EmailMe</h1>
              <p>1471686919@qq.com</p>
            </Col>
            <Col sm={12} md={4}>
              <h1><span className="icon-phone"></span>电话</h1>
              <p>18788870619/13731882638</p>
            </Col>
          </div>
        </div>

      </div>
    )
  }
}
export default Contact;
