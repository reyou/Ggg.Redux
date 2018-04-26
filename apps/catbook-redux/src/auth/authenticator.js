class Auth {
  static loggedIn() {
    console.log(
      "authenticator.js",
      "loggedIn()",
      "!!sessionStorage.jwt",
      !!sessionStorage.jwt
    );
    // https://stackoverflow.com/questions/784929/what-is-the-not-not-operator-in-javascript
    // Remember it by "bang, bang you're boolean"
    return !!sessionStorage.jwt;
  }

  static logOut() {
    sessionStorage.removeItem("jwt");
  }
}

export default Auth;
