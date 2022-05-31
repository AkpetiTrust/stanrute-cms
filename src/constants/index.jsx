const constants = {
  apiUrl: "https://stanrute-cms.herokuapp.com",
  token: function () {
    return JSON.parse(localStorage.getItem("user"))?.token;
  },
};

export { constants };
