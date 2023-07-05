import './App.css';
import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

function App() {
  const [profiles, setProfiles] = useState({
    userId: "",
    displayName: "",
    pictureUrl: "",
    statusMessage: ""
  });

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
      <QRCodeSVG value={`https://3f72-163-13-133-72.ngrok-free.app/dejoy/linebot/getMember?userId=${profiles.userId}`}/>
    </div>
  );
}

export default App;
