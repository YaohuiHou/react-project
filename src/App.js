import React from 'react';
import './App.css';
import project from './project.json'

// export default App;

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = Object.assign(project,{
      test:12
    })
  }
  render(){
    let lis = this.state.list.map(item=>{
      return( <li key={item.id}>
        <a href={item.wap_link} target="_blank">
          <div className="subject_card h5">
            <img loading="lazy" src={item.photo} className="subject_card_img" />
            <this.PcOrM item={item}/>
          </div>
        </a>
      </li>
      )
    })
    return (
      <ul className="subject_tab_list">
        {lis}
      </ul>
    );
  }
  PcOrM(page){
    let item = page.item
    if(item.qrcode){
      return(<div className="subject_card_footer clearfix">
        <div className="subject_card_words fl">{item.name}</div>
        <div className="subject_card_icon fl">
          <div className="code">
            <div className="qrcode_img">
              <img className="qcode" src={item.qrcode} /></div>
              <div className="code_bg"></div>
            </div>
          </div>
        </div>
      )
    }else{
      return(<div className="subject_card_footer clearfix">
        <div className="subject_card_words fl">{item.name}</div>
        </div>
      )
    }
    
  }
}