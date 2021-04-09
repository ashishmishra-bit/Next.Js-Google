import Head from 'next/head'
import Avatar from '../components/Avatar'
import { Microphone , ViewGridIcon } from "@heroicons/react/solid";


export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className = "flex w-full p-5  justify-between text-sm text-gray-700">
      {/* Left Block */}
        <div className = "flex space-x-4 items-center">
          <p className = "link">About</p>
          <p className = "link">Store</p>
        </div>

        {/* Right Block */}

        <div className = "flex space-x-4 items-center">
        <p className = "link">Gmail</p>
        <p className = "link">Images</p>


        {/*Icon*/}
        <ViewGridIcon className = "h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

        {/*Avatar Block */}

        <Avatar url = 'https://ashishmishra.netlify.app/static/media/profile2.e296c4e3.png' />

        </div>
      </header>
    </div>
  )
}
