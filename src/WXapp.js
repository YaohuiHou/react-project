import React from "react";
import "./wxapp.css";
import wxappData from "./wxapp.json";

export default class WXapp extends React.Component{
  constructor(props){
    super(props);
    this.state = Object.assign(wxappData,{

    })
  }
  render(){
    let list = this.state.list.map(item=>{
      return( <li key={item.name}>
        <div className="wxapp">
          <figure>
            <img loading="lazy" src={item.img} />
          </figure>
          <h2>{item.name}</h2>
          <p>{item.content}</p>
        </div>
      </li>
      )
    })
    return(
      <ul className="wxlist">
        {list}
      </ul>
    )
  }
}