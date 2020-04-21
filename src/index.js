import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WXapp from './WXapp'
import RightView from './right'
import * as serviceWorker from './serviceWorker';

class AppContent extends React.Component{
  constructor(props){
    super(props);
    this.clickShowWXContent = this.clickShowWXContent.bind(this)
    this.clickChangePcType = this.clickChangePcType.bind(this)
    this.state = {
      // false: web  true: wx
      webOrWx:false,
      PcType:false
    }
  }
  clickShowWXContent(type){
    this.setState({
      webOrWx: type
    })
  }
  clickChangePcType(type){
    this.setState({
      PcType:type
    })
  }
  render(){
    let webOrWx = this.state.webOrWx;
    let content;
    if(webOrWx){
      content = <WXapp/>
    }else{
      content = <App  PcType={this.state.PcType}/>
    }
    return(
      <div>
        <RightView onPcType={this.clickChangePcType} onChnageType={this.clickShowWXContent} webOrWx={webOrWx}/>
        {content}
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <AppContent />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
