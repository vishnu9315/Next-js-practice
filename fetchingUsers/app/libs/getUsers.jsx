export default async function getUsers(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if(!response.ok){
        console.log("fetchingg eror")
    }

    return await response.json();
}