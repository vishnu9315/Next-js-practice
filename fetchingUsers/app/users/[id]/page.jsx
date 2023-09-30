import getUserDetails from '../../libs/getUser'
import getUserPosts from '../../libs/getUserPosts'

//this id we are getting from page.jsx
const UserDetails = async ({params: {id}}) => {
    //initialize both request in parallel
    const getData = getUserDetails(id);
    const userPosts = getUserPosts(id)

    //wait for both request to complete
    // const [user, posts] = await Promise.all([getData, userPosts]);
//    console.log("posts" , posts)
   

    return (
        <div>
        <h1>User Details</h1>
        <p key = {user.id}>{user.name}</p>
        {posts.length > 0 && posts.map((post, index) => (
                <div key = {index}> {post.title}</div>
            ))
        }
        </div>
    )
}
export default UserDetails;