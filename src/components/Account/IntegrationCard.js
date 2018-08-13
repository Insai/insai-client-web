import React from "react";
import { Button, Card, Elevation, Intent } from "@blueprintjs/core";
import { requestToken, convertToken } from "../../actions/collection-actions";

/**
 * Pocket Integration Card
 */
export default class extends React.Component {
  state = {
    isConnected: false
  };
  componentWillMount() {
    const accessToken = localStorage.getItem("access_token");
    if (typeof accessToken === "string") {
      this.setState({ isConnected: true });
    }
  }
  getAccessToken = async token => {
    // transform request_token to access_token
    console.log(token);
    const accessToken = await convertToken(token);
    // save to localstorage and server
    localStorage.setItem("access_token", accessToken);
  };
  handleConnect = async () => {
    // get request_token
    const token = await requestToken();
    // redirect to pocket auth page
    const redirectUri = "http://localhost:3000/account";
    const url = `https://getpocket.com/auth/authorize?request_token=${token}&redirect_uri=${redirectUri}`;
    let popup = window.open(url);
    popup.close = this.getAccessToken(token);
  };
  render() {
    const { isConnected } = this.state;
    return (
      <Card elevation={Elevation.ONE}>
        <h5>
          <a href="https://getpocket.com/">Connect to Pocket</a>
        </h5>
        <p>Use Pocket to collect links on the web</p>
        {isConnected ? (
          <Button intent={Intent.DANGER}>Disconnect</Button>
        ) : (
          <Button onClick={this.handleConnect} intent={Intent.SUCCESS}>
            Connect
          </Button>
        )}
      </Card>
    );
  }
}
