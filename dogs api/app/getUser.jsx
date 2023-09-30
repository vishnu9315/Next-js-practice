
export default async function getDogs(){
    const response = await fetch('https://dog.ceo/api/breeds/image/random', {
        cache: 'no-cache'
    })
    const data = await response.json();
    return data;
}