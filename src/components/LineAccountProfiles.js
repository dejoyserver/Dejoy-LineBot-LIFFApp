import React, { useEffect, useState } from 'react';
import liff from '@line/liff';

function LineAccountProfiles() {
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
            liff.getProfile((profile) => {
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

    return(
        <div>
            <h1>hello world</h1>
            <p>{profiles.userId}</p>
            <p>{profiles.displayName}</p>
            <p>{profiles.pictureUrl}</p>
            <p>{profiles.statusMessage}</p>
        </div>
    );
}

export default LineAccountProfiles;