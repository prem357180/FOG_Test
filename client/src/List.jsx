import React from 'react';
import './css/index.css'

const List = (props) => {
  return (
    <div>
      {props.required.map((e,index)=>{
                    if(props.complete[e]=='true'){
                       return <h2 id='list' key={index}><p>{e}</p><p>{"YES"}</p></h2>
                    }else if(props.complete[e] == 'false'){
                       return <h2 id='list' key={index}><p>{e}</p><p>{"NO"}</p></h2>
                    }else if(typeof(props.complete[e])=='number'){
                        return <h2 id='list' key={index}><p>{e}</p><p>{props.complete[e]}</p></h2>
                    }
                    else{
                       return <h2 id='list' key={index}><p>{e}</p><p>{props.complete[e].toUpperCase()}</p></h2>
                    }
                })}
    </div>
  );
};

export default List;
