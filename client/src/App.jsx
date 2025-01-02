import GameSettings from './GameSettings.jsx'
import Map from './Map.jsx'
import './css/index.css'

function App() {
  return (
    <>
      <img className='bg' src="/background.jpg" alt="background" />
      <div className='flx'>
        <div className='left'>
          <div></div>
          <div className='lmenu'>
            <div className="tooltip"><img src="/side_panel/2.png" alt="" /><span className="tooltiptext">BATTLEFIELD V</span></div>
            <div className="tooltip"><img src="/side_panel/3.png" alt="" /><span className="tooltiptext">BATTLEFIELD 1</span></div>
            <div className={"tooltip active1"}><img src="/side_panel/4.png" alt="" style={{filter: 'brightness(100%)'}}/><span className="tooltiptext">BATTLEFIELD 4</span></div>
            <div className="tooltip"><img src="/side_panel/5.png" alt="" /><span className="tooltiptext">BATTLEFIELD HARDLINE</span></div>
            <div className="tooltip"><img src="/side_panel/6.png" alt="" /><span className="tooltiptext">CAREER</span></div>
            <div className="tooltip"><img src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafab68a3c97a6a478b8d_side-menu__watch.svg"alt="Watch Icon"/><span className="tooltiptext">WATCH</span></div>
            <div className="tooltip"><img src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafab332f0ade9870b435_side-menu__news.svg"alt="News Icon"/><span className="tooltiptext">NEWS</span></div>
          </div>
          <div className='clmn'>
            <div className={"tooltip"}><img src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafabd71ff7186d1c97d5_side-menu__help.svg"alt="Help Icon" style={{width:"25px",padding:"5px 0px"}}/><span className="tooltiptext">HELP</span></div>
            <div className={"tooltip"}><img src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafabc5fc83c1e7f50842_side-menu__quit.svg"alt="Quit Icon" style={{width:"25px",padding:"5px 0px"}}/><span className="tooltiptext">QUIT</span></div>
          </div>
        </div>


        <div className='middle'>
          <h2 className='heading1'> <img src="/chevron_left.png" alt="" width={20}/>MULTIPLAYER &nbsp;&nbsp;&nbsp; / &nbsp;&nbsp;&nbsp; SERVER BROWSER &nbsp;&nbsp;&nbsp; /</h2>
          <h1>SERVER INFO</h1>
          <div className='scrollable'>
            <div className='fix'>
              <h1 className='title'>!RC3-BASEMAPS</h1>
              <div className='heading1' id='heading2' color='red'><img src="https://flagcdn.com/w320/us.png" alt="USA Flag" width="20"/><h2>CONQUEST LARGE &nbsp;- &nbsp;LANCANG DAM &nbsp;- &nbsp;CUSTOM &nbsp;- &nbsp;60 HZ</h2></div>
              <p id='heading3'>Server protected by The_K-50 AntiCheat. Vip !Rules, Questions, Request, Appeal, Visit us: www.epg.gg | Discord <br/> https://discord.gg/3r5NK4d</p>
            </div>
            <div id='buttons'>
              <button>JOIN</button>
              <button>SPECTATE</button>
              <button>JOIN AS COMMANDER</button>
              <button>★13672</button>
            </div>
              <GameSettings/>
            <div>
              <Map/>
            </div>
          </div>
        </div>
      </div>
        <div className='right'>

          <div className='item'>
            <div className='icon_title svg'>
              <img src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab15999e303e7c202c28c_squad.svg" style={{'paddingRight':"5%"}}/>
              <h2>SQUAD</h2>
            </div>

            <div  className={'icon_title image add'}>
                <img src="./add-plus-button.png"/>
                <h2>Squad Join</h2>
            </div>

          </div>

          <div className='item'>

            <div className={'icon_title svg'}>
              <img src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab159d334e32483dbbcbb_online.svg"/>
              <h2>ONLINE</h2>
            </div>

            <div className={'icon_title image'}>
              <img src="/side_panel/0.png" className={'active2'} style={{filter: 'brightness(100%)'}}/>
              <h2>Mary Jane <br /> Online</h2>
            </div>

          </div>


          <div className='item'>

            <div className={'icon_title svg'}>
              <img src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab15904900760dbfa7f70_offline.svg"/>
              <h2>OFFLINE</h2>
            </div>


            <div className='icon_title image offline'>
              <img src="/side_panel/1.png" style={{borderLeftStyle:'solid'}}/>
              <h2>420 <br /> Offline</h2>
            </div>


          </div>


        </div>
    </>
  )
}

export default App
