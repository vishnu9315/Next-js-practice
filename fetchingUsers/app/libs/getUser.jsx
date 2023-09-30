const  getUserDetails = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if(!response.ok){
        console.log("fetching error")
    }

    return await response.json();
}

export default getUserDetails;