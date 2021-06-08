const fetch = require("node-fetch");

const getUsers = async () => {
    const response = await fetch('http://localhost:5001/locations');
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    return jsonResponse.data;
};


getUsers()