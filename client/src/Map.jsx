import React from 'react';
import './css/index.css'

const Map = (props) => {
  return (
    <>
    <div>
    <h6 style={{fontWeight:600}}>MAP ROTATION</h6>
    <div id='grid'>
        {<Card src = {'/maps/map3.png'} title = {'DAWNBREAKER'}/>}
        {<Card src = {'/maps/map1.png'} title = {'PROPAGANDA'}/>}
        {<Card src = {'/maps/map2.png'} title = {'OPERATION LOCKER'}/>}
        {<Card src = {'/maps/map4.png'} title = {'LANCANG DAM'}/>}
        {<Card src = {'/maps/map6.png'} title = {'SIEGE OF SHANGHAI'}/>}
        {<Card src = {'/maps/map5.png'} title = {'GOLMUD RAILWAY'}/>}
        {<Card src = {'/maps/map1.png'} title = {'PROPAGANDA'}/>}
        {<Card src = {'/maps/map6.png'} title = {'SIEGE OF SHANGHAI'}/>}
        {<Card src = {'/maps/map3.png'} title = {'DAWNBREAKER'}/>}
        {<Card src = {'/maps/map1.png'} title = {'PROPAGANDA'}/>}
        {<Card src = {'/maps/map2.png'} title = {'OPERATION LOCKER'}/>}
        {<Card src = {'/maps/map4.png'} title = {'LANCANG DAM'}/>}
        {<Card src = {'/maps/map6.png'} title = {'SIEGE OF SHANGHAI'}/>}
        {<Card src = {'/maps/map5.png'} title = {'GOLMUD RAILWAY'}/>}
        {<Card src = {'/maps/map1.png'} title = {'PROPAGANDA'}/>}
        {<Card src = {'/maps/map6.png'} title = {'SIEGE OF SHANGHAI'}/>}
    </div>
    </div>
    </>
  );
};

const Card = (props) => {
    return(
        <>
        <div id='card'>
            <img src={props.src}  alt="" width={'100%'}/>
            <h2>CONQUEST LARGE <br /> {props.title}</h2>
        </div>
        </>
    );
};

export default Map;
