import './App.css';
import React, { useState, useEffect } from 'react';
import liff from '@line/liff';
import { QRCodeSVG } from 'qrcode.react';
import axios from 'axios';

function App() {
  const [profiles, setProfiles] = useState({
    userId: "",
    displayName: "",
    pictureUrl: "",
    statusMessage: ""
  });
  const [memberToken, setMemberToken] = useState("");

  useEffect(() => {
    liff.init({
        liffId: '2000018050-d5JXzaMR',
        withLoginOnExternalBrowser: true,
    }).then(() => {
        liff.getProfile().then((profile) => {
            setProfiles({
                userId: profile.userId,
                displayName: profile.displayName,
                pictureUrl: profile.pictureUrl,
                statusMessage: profile.statusMessage
            });
        });
    }).then(() => {
      axios({
        method: 'get',
        url: 'https://3f72-163-13-133-72.ngrok-free.app/dejoy/linebot/getUserToken',
        params: {
          userId: "Udca0f5281cf96032003f3a20dd9ea347"
        },
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }).then((response) => {
        console.log(response);
        setMemberToken(JSON.stringify(response.data));
      }).catch((err) => {
        console.log(err);
      });
    }).catch((err) => {
        console.log(err);
    });
  }, []);

  return (
    <div className="App">
      <h1>This app is for linebot using liff webpage.</h1>
      <p>userId: {profiles.userId}</p>
      <p>displayName: {profiles.displayName}</p>
      <p>pictureUrl: {profiles.pictureUrl}</p>
      <p>statusMessage: {profiles.statusMessage}</p>
      <hr/>
      <p>{`https://3f72-163-13-133-72.ngrok-free.app/dejoy/linebot/getMember?token=${memberToken}`}</p>
      <QRCodeSVG value={`https://3f72-163-13-133-72.ngrok-free.app/dejoy/linebot/getMember?token=${memberToken}`}/>
    </div>
  );
}

export default App;
