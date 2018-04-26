class CatsApi {
  static requestHeaders() {
    return {
      AUTHORIZATION: `Bearer ${sessionStorage.jwt}`
    };
  }

  static getAllCats() {
    const headers = this.requestHeaders();
    // https://developer.mozilla.org/en-US/docs/Web/API/Request
    const request = new Request(`${process.env.API_HOST}/api/v1/cats`, {
      method: "GET",
      headers: headers
    });

    return fetch(request)
      .then(response => {
        return response.json();
      })
      .catch(error => {
        return error;
      });
  }

  static updateCat(cat) {
    console.log("CatsApi.js", "updateCat", "cat", cat);
    const headers = Object.assign(
      {
        "Content-Type": "application/json"
      },
      this.requestHeaders()
    );
    let requestUrl = `${process.env.API_HOST}/api/v1/cats/${cat.id}`;
    console.log("CatsApi.js", "updateCat", "requestUrl", requestUrl);
    const request = new Request(requestUrl, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify({ cat: cat })
    });

    return fetch(request)
      .then(response => {
        return response.json();
      })
      .catch(error => {
        return error;
      });
  }

  static createCat(cat) {
    const headers = Object.assign(
      { "Content-Type": "application/json" },
      this.requestHeaders()
    );
    const request = new Request(`${process.env.API_HOST}/api/v1/cats`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ cat: cat })
    });

    return fetch(request)
      .then(response => {
        return response.json();
      })
      .catch(error => {
        return error;
      });
  }

  static deleteCat(cat) {
    const headers = Object.assign(
      { "Content-Type": "application/json" },
      this.requestHeaders()
    );
    const request = new Request(
      `${process.env.API_HOST}/api/v1/cats/${cat.id}`,
      {
        method: "DELETE",
        headers: headers
      }
    );

    return fetch(request)
      .then(response => {
        return response.json();
      })
      .catch(error => {
        return error;
      });
  }
}

export default CatsApi;
