// http://www.thegreatcodeadventure.com/react-redux-tutorial-part-v-the-show-feature/
//=============================================================================
class HobbyApi {
  static requestHeaders() {
    return { AUTHORIZATION: `Bearer ${sessionStorage.jwt}` };
  }
  // https://jsonplaceholder.typicode.com/
  static getAllHobbies() {
    const headers = this.requestHeaders();
    const request = new Request(`${process.env.API_HOST}/api/v1/hobbies`, {
      method: "GET",
      headers: headers
    });
    return fetch(request)
      .then(response => {
        let jsonResult = response.json();
        return jsonResult;
      })
      .catch(error => {
        return error;
      });
  }
}

export default HobbyApi;
//=============================================================================
