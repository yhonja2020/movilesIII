
const getUsers = async () => {
    const response = await fetch('http://192.168.0.13:3005/locations/');
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    return jsonResponse;
};

const getUser = async (id) =>{

    const response = await fetch('https://reqres.in/api/users/' + id);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
};

const UsersService = {
    getUsers,
    getUser 
}

export default UsersService;