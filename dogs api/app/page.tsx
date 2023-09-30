import Image from 'next/image'
import getUser from './getUser';
export default async function Home() {
  const dogs = await getUser();
  return (
    <main className="flex min-h-screen flex-col justify-center items-center p-24">
      <h1>Dogs Api </h1>
      <Image src = {dogs.message} alt = "dog" height = {200} width = {200} />
    </main>
  )
}
