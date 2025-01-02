import React, { useEffect, useState } from 'react';
import List from './List';

const sett = ['REGION','PUNKBUSTER','FAIRFIGHT','PASSWORD','PRESET']
const adv = ['MINIMAP','ONLY SQUAD LEADER SPAWN','VEHICLES','TEAM BALANCE','MINIMAP SPOTTING','HUD','3P VEHICLE CAM','REGENERATIVE HEALTH','KILL CAM','FRIENDLY FIRE','3D SPOTTING','ENEMY NAME TAGS'] 
const rules = ['TICKETS','VEHICLE SPAWN DELAY','BULLET DAMAGE','KICK AFTER TEAM KILLS','PLAYER HEALTH','PLAYER RESPAWN TIME','KICK AFTER IDLE','BAN AFTER KICKS']
function GameSettings() {
  const [settings, setSettings] = useState(null);
    useEffect(() => {
    const fetchSettings = async () => {
        try {
          // const response = await fetch('https://my.api.mockaroo.com/fog_test.json', {
          //   headers: {
          //     'X-API-Key': '5f118670', // Add your Mockaroo API key here
          //   },
          // });
          const response = await fetch('http://localhost:3000/api/posts');
      
          if (!response.ok) {
            throw new Error('Failed to fetch settings');
          }
          
          const data = await response.json();
          setSettings(data); // Mockaroo returns a single object, not an array here
        } catch (error) {
          console.error('Error fetching settings:', error);
        }
      };

    fetchSettings();
  }, []);

  if (!settings) {
    return <div>Loading game settings...</div>;
  }

  return (
    <div>
      <div className='player'>
        <div><h1 className='title'><p>PLAYERS</p>{settings['PLAYERS']}/64</h1></div>
        <div><h1 className='title'><p>PING</p>{settings['PING']} ms</h1></div>
        <div><h1 className='title'><p>TICKRATE</p>{settings['TICKRATE']} Hz</h1></div>
      </div>

      <div className='green'>
        <div className='settings'>
            <h2>SETTINGS</h2>
            <div>
                <List complete={settings} required={sett}></List>
            </div>
        </div>
        <div className='advanced'>
            <h2>ADVANCED</h2>
                <List complete={settings} required={adv}></List>
            <div></div>
        </div>
        <div className='rules'>
            <h2>RULES</h2>
                <List complete={settings} required={rules}></List>
        <div>

        </div>
        </div>
      </div>
    </div>
  );
}

export default GameSettings;
