const constants = {
  apiUrl: "http://localhost:4000",
  token: function () {
    return JSON.parse(localStorage.getItem("user"))?.token;
  },
};

export { constants };
