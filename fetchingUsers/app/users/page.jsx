import getUsers from '../libs/getUsers'
import Link from 'next/link';
const UsersPage = async () => {
    const data = await getUsers();
    console.log(data)

    return (
        <div className="text-center mt-20">
            <h1 className="text-2xl font-bold">Users</h1>
            {data.map((item) => {
                return <>
                <p key = {item.id}> 
                <Link href = {`/users/${item.id}`}>
                    {item.name}
                </Link>
                </p>
                </>
            })}
        </div>
    )
}
export default UsersPage;