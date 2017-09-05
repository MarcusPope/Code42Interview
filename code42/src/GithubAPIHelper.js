
import creds from './creds.json';

export const GitReq = (urls) => {

    return Promise.all(urls.map(function(url) {

        return fetch(url, {
            method: "GET",
            headers: {
                'Authorization': 'Basic ' + btoa([creds.user, creds.token].join(":")),
            }
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            throw new Error(res.statusText);
        });
    }));
};