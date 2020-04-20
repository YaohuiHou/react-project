import React from "react";
import "./right.css";
import h5 from './h5.png'
import wx from './wx.png'

export default class RightView extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      code: `https://api.qrserver.com/v1/create-qr-code/?data=${window.location.href}`
    }
  }
  render(){
    return(
      <div className="rightfixed">
        <div className="item" onClick={
          ()=>{
            window.scrollTo({ 
                top: 0, 
                behavior: "smooth" 
            })
          }
        }>
          <i></i>
          <span>返回顶部</span>
        </div>
        <div className="item" onMouseOver={()=>{
          // ${location.href}
          console.log(window.location.href);
          let href = window.location.href
          // this.setState({
          //   code:`https://api.qrserver.com/v1/create-qr-code/?data=${href}`
          // })
        }}>
          <div className="rightcode">
            <img src={this.state.code}/>
          </div>
          <i></i>
          <span>扫码查看</span>
        </div>
        <div className="item" onClick={()=>{
          this.props.onChnageType(!this.props.webOrWx)
        }}>
          {this.props.webOrWx ? <this.IconH5 /> : <this.IconWx />}
        </div>
      </div>
    )
  }
  IconH5(){
    return <img src={h5}/>;
  }
  IconWx(){
    return <img src={wx}/>
  }
}