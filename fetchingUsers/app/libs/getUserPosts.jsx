
import React from 'react'

const getUserPosts = async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
  

  if(!response.ok){
    console.log("Error while fetching")
  }

  return response.json()
}

export default getUserPosts