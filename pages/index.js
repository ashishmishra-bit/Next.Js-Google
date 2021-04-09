import Head from 'next/head'


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


        {/*Avatar Block */}



        </div>
      </header>
    </div>
  )
}
