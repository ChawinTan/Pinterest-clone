# Pinterest clone
This project allows users to sign on through various SSO providers and link pictures to their accounts, upload link to pictures and delete pictures they have linked to. The pictures would be displayed in a pinterest styled wall.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Functionality
1. As an unauthenticated user, I can login in through various SSO providers, eg: facebook, Google, github etc ....
2. As an authenticated user, I can link to other people's images.
3. As an authenticated user, I delete images I have linked to.
4. As an authenticated user, I can view a pinterest styled wall of images I've linked to.
5. As an authenticated user, I can like the images.
6. As an unauthenticated user, I can browse users and see the images they have linked to.

## Set up
Instructions for set up.

### Generating key and secret for https
1. cd into `server` directory
2. Follow the instructions in this [medium artical]("https://medium.com/@nitinpatel_20236/how-to-create-an-https-server-on-localhost-using-express-366435d61f28")

### Config files
Under `Server` directory, create a `config.js` file.

```
const config = {
    facebookApiKey: 'your key',
    facebookApiSecret: 'your secret',
    callbackUrl: 'https://localhost:8081/user/callback'
};

module.exports = config;
```

### Facebook App
Set up a Facebook app at facebook developer site. Make sure you have `FacebookLogin` as one of the product. 

Here are some things you have to take note:
1. Have a valid Privacy Policy URL.
2. Add `localhost` as one of your app domains
3. Make sure you toggle your app status to live
4. Under Facebook Login  -> Settings, add `https://localhost:8081/user/callback` as a valid redirect url
5. Under quickstart, chose Web and add the above callback url as your Site URL.

## Database

### User
Fields (type)

1. id (int) - primary key, auto increment
2. name (varchar)
3. secret (varchar)

### Photo
Fields (type)

1. id (int) - primary key, auto increment
2. user_id (varchar)
3. link (varchar)
4. description (varchar)

### Photo link map
Fields (type)

1. id (int) - primary key, auto increment
2. user_id (varchar)
3. photo_id (int)
4. counter_party_id (varchar)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

