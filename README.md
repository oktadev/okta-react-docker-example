# React + Docker Example
 
This example app shows how to use Docker to containerize a React app.

**Prerequisites:** 

* [Node 12](https://nodejs.org/)+
* [Docker](https://docs.docker.com/install/)
* An [Okta Developer Account](https://developer.okta.com/signup)

> [Okta](https://developer.okta.com/) has Authentication and User Management APIs that reduce development time with instant-on, scalable user infrastructure. Okta's intuitive API and expert support make it easy for developers to authenticate, manage and secure users and roles in any application.

* [Getting Started](#getting-started)
* [Links](#links)
* [Help](#help)
* [License](#license)

## Getting Started

To install this example application, run the following commands:

```bash
git clone https://github.com/oktadeveloper/okta-react-docker-example.git
cd okta-react-docker-example
npm install
```

### Create an OIDC App on Okta

Register a new application by going to **Applications** > **Add Application**. On the next screen, choose **Single Page App** and click **Next**.

On the following screen, you can edit the application's settings. Make sure that the port number is 3000 and the base URI is `http://localhost:3000/`. Change the Login Redirect URI to `http://localhost:3000/callback`. Once you are done, you will see a **Client ID**.

### Configure your Okta Settings

Copy your Okta domain and client ID into `src/App.js`:

```js
function App() {
  return (
      <Router>
        <Security issuer='https://{YourOktaDomain}/oauth2/default'
                  clientId='{ClientId}'
                  redirectUri={window.location.origin + '/callback'}
               pkce={true}>
          <SecureRoute path='/' exact={true} component={Calendar}/>
          <Route path='/callback' component={LoginCallback}/>
        </Security>
      </Router>
  );
}
```

Start everything with `npm start` and you'll be able to login with React and Okta!

## Links

This example uses the following open source libraries:

* [React](https://reactjs.org/)
* [Styled Components](https://styled-components.com/)
* [Okta React SDK](https://github.com/okta/okta-oidc-js/tree/master/packages/okta-react)

## Help

Please post any questions as issues in this repository, or visit our [Okta Developer Forums](https://devforum.okta.com/).

## License

Apache 2.0, see [LICENSE](LICENSE).
