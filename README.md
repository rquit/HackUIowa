# Repository for my entry in the University of Iowa Hackathon

### If you want to host this yourself or use it for a project, follow these steps.

1. Create a new app in firebase.

2. Copy the credentials it gives you under "web".

3. Create a new file named `firebaseInit.json` in `/src`.

4. Paste the credentials inside the file, it should look like this:
```
{
    "apiKey": "<your_apikey>",
    "authDomain": "<your_authDomain>",
    "projectId": "<your_projectId>",
    "storageBucket": "<your_storageBucket>",
    "messagingSenderId": "<your_messagingSenderId>",
    "appId": "<your_appId>",
    "measurementId": "<your_measurementId>"
}
```

5. Run `npm start`.

6. Do whatever you want with it!
