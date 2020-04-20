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
    this.state = {
      // false: web  true: wx
      webOrWx:false
    }
  }
  clickShowWXContent(type){
    this.setState({
      webOrWx: type
    })
  }
  render(){
    let webOrWx = this.state.webOrWx;
    let content;
    if(webOrWx){
      content = <div><RightView onChnageType={this.clickShowWXContent} webOrWx={webOrWx}/><WXapp /></div>
    }else{
      content = <div><RightView onChnageType={this.clickShowWXContent} webOrWx={webOrWx}/><App /></div>
    }
    return(
      <div>
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
