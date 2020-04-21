import React from 'react';
import './App.css';
import project from './project.json'

// export default App;

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.H5TypeOne = this.H5TypeOne.bind(this)
    this.H5TypeTwo = this.H5TypeTwo.bind(this)
    this.state = Object.assign(project,{
      selectIndex: 0
    })
  }
  render(){
    let view;
    if(this.props.PcType){
      view = <this.H5TypeTwo 
        list={this.state.list} 
        selectIndex={this.state.selectIndex} 
        />
    }else{
      view = <this.H5TypeOne list={this.state.list}/>
    }
    return(
      <div>
        {view}
      </div>
    )
  }
  // 模式切换 可预览
  H5TypeTwo(types){
    let lis = types.list.map((item,index)=>{
          return( <li key={item.id} className={this.state.selectIndex === index ?'selected':''} onClick={()=>{
            if(item.qrcode){
              this.setState({
                selectIndex:index
              })
            }else{
              window.open(item.wap_link)
            }
          }}>
          <figure>
            <img loading="lazy" src={item.photo} />
          </figure>
          <div className="content">
            <p>{item.name}</p>
            {item.qrcode && <i></i>}
          </div>
      </li>
      )
    })
    return (
      <div className="pc-view">
        <ul className="app-left">
          {lis}
        </ul>
        <div className="app-right">
          <div className="phone-wrap">
            <div className="phone">
                <iframe id="phone-shell" className="double-dpr" src={types.list[this.state.selectIndex].wap_link}></iframe>
            </div>
          </div>
          <div className="info">
            <figure>
              <img src={types.list[this.state.selectIndex].qrcode}/>
            </figure>
            <p>{types.list[this.state.selectIndex].name}</p>
          </div>
        </div>
      </div>
    );
  }
  // 模式切换 正常
  H5TypeOne(types){
    let lis = types.list.map(item=>{
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
  // pc m判断
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
