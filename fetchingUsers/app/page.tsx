import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='text-center mt-20'>
      <h1 className='text-3xl font-bold'>Home</h1>
      <Link href = "/users">Go To Users </Link>
    </div>
  )
}
