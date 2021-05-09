import React from 'react';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import DoneIcon from '@material-ui/icons/Done';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListIcon from '@material-ui/icons/List';

import axios from 'axios'
import IrButton from './ir-button'
import './App.css';

const AppStyle: React.CSSProperties = {
  textAlign: 'center'
}

const AppHeaderStyle: React.CSSProperties = {
  // backgroundColor: '#282c34',
  backgroundColor: 'white',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 20,
  color: 'white',
}
const colStyle: React.CSSProperties = {
  // backgroundColor: '#282c34',
  flex: 1,
  padding:5
}


function App() {

  const sendFileRequest = async (file: string): Promise<void> => {
    const ret = await axios.get(`/send?file=${file}`)
    console.log(ret)
  }

  return (
    <div style={AppStyle}>
      <header style={AppHeaderStyle}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={colStyle} >
            <IrButton onClick={sendFileRequest} name='volume_up' >
                <VolumeUpIcon fontSize="large"/>
            </IrButton>
            <IrButton onClick={sendFileRequest} name='power' >
                <PowerSettingsNewIcon fontSize="large"/>
            </IrButton>
            <IrButton onClick={sendFileRequest} name='source' >
                <ListIcon fontSize="large"/>
            </IrButton>
           
          </div>
          <div style={colStyle} >
            <IrButton onClick={sendFileRequest} name='volume_down' >
                <VolumeDownIcon fontSize="large" />
            </IrButton>
            <IrButton onClick={sendFileRequest} name='arrow_up' >
                <ArrowUpwardIcon fontSize="large" />
            </IrButton>
           
            <IrButton onClick={sendFileRequest} name='hub' >
                <DeviceHubIcon fontSize="large"/>
            </IrButton>
          </div>
          <div style={colStyle} >
            <IrButton onClick={sendFileRequest} name='arrow_left' >
                <ArrowBackIcon fontSize="large"/>
            </IrButton>
            <IrButton onClick={sendFileRequest} name='done' >
                <DoneIcon fontSize="large"/>
            </IrButton>
            <IrButton onClick={sendFileRequest} name='arrow_right' >
                <ArrowForwardIcon fontSize="large"/>
            </IrButton>
          </div>
          <div style={colStyle} >
            <IrButton onClick={sendFileRequest} name='return' >
                <KeyboardReturnIcon fontSize="large"/>
            </IrButton>
            <IrButton onClick={sendFileRequest} name='arrow_down' >
                <ArrowDownwardIcon fontSize="large" />
            </IrButton>
            <IrButton onClick={sendFileRequest} name='exit' >
                <ExitToAppIcon fontSize="large"/>
            </IrButton>
          </div>
      
        </div>
      </header>
    </div>
  );
          
}


export default App;