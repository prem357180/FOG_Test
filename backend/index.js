const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your allowed site
  };
  
app.use(cors(corsOptions)); // Apply CORS middleware with the options
  
app.use(express.json());

app.get('/api/posts', (req, res) => {
  res.json(
    {"PLAYERS":40,"PING":21,"TICKRATE":73,"SETTINGS":"LOW","RULES":"FAIR PLAY","REGION":"Philippines","MINIMAP":"false","TICKETS":327,"PUNKBUSTER":"true","ONLY SQUAD LEADER SPAWN":"true","VEHICLE SPAWN DELAY":15,"FAIRFIGHT":"true","VEHICLES":"true","BULLET DAMAGE":43,"PASSWORD":"false","TEAM BALANCE":"false","KICK AFTER TEAM KILLS":8,"PRESET":"NORMAL","MINIMAP SPOTTING":"true","PLAYER HEALTH":"true","HUD":"true","PLAYER RESPAWN TIME":14,"3P VEHICLE CAM":"false","KICK AFTER IDLE":249,"REGENERATIVE HEALTH":"false","BAN AFTER KICKS":1,"KILL CAM":"true","FRIENDLY FIRE":"false","3D SPOTTING":"true","ENEMY NAME TAGS":"false"},
  );
});

app.listen(3000, () => console.log('Mock API running on http://localhost:3000'));
