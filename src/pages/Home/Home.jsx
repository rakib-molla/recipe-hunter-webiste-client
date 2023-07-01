import React from 'react'
// import Card from '../Card/Card';
const Card = React.lazy(() => import("../Card/Card"));

const Home = () => {
  return (
    <>
      <div>
        <div className="hero h-screen " style={{ backgroundImage: `url("https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")` }}>
          <div className="hero-overlay bg-opacity-30"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Welcome To <br /> <span className='text-blue-600'>Le</span> <span className='text-red-600'>Bernardin</span></h1>
              <p className="mb-5">
                We also offer catering services for events of all sizes, whether you're planning a wedding, corporate event, or intimate gathering.
                Thank you for considering our restaurant for your dining needs. We look forward to welcoming you soon and sharing our love of food and hospitality with you.</p>
              <button className="py-3 px-5 rounded-md font-bold bg-black hover:bg-white hover:text-black">Get Offer</button>
            </div>
          </div>
        </div>
      </div>

      <div className='my-10 mx-20'>
        {/* <div className='grid grid-cols-3 gap-5'></div> */}
        <React.Suspense fallback={<div className='text-red-500 font-bold'>Please Wait Data Is Loading...</div>}>
          <Card></Card>
        </React.Suspense>
      </div>
      <div className='grid grid-rows-1 lg:grid-cols-2 md:grid-cols-2  my-20 p-10 bg-pink-500 rounded-xl'>

        <div className=' text-center'>
          <div className='lg:mt-40'>
            <h1 className='text-white font-mono text-5xl'><span className='text-blue-500'>Le</span> <span className='text-yellow-500'>Bernardin</span></h1>
            <h2 className='text-white font-bold text-xl mt-2'> THE BEST EXPERIENCE </h2>
            <h2 className='text-white font-bold text-xl my-2'> Cooking Since 1990 </h2>
            <button className='px-8 py-4 rounded-md font-bold text-pink-700 bg-white hover:text-black'>Make A Reservation</button>
          </div>
        </div>
        <div className='mt-10'>
          <iframe className='lg:w-full h-full sm:w-40' src="https://www.youtube.com/embed/uL3SWSm97-I" title="YouTube video player"></iframe>
        </div>

      </div>
      
      <section className="relative py-20">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-36"

        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-lg"
                src="https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              />
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div className="md:pr-12">
                <div
                  className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300"
                >
                  <i className="fas fa-rocket text-xl"></i>
                </div>
                <h3 className="text-3xl font-bold">Best <span className='text-yellow-500 text-5xl'>Quality</span> Ingredients</h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ratione corrupti hic culpa modi omnis nobis molestiae totam officia ipsam dignissimos, quidem ipsum, esse nemo, maiores quisquam. Voluptatum, quia beatae?
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span
                          className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"
                        ><i className="fas fa-fingerprint"></i
                        ></span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">
                          Healthy Food Guarantied
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span
                          className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"
                        ><i className="fab fa-html5"></i
                        ></span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">World's Best Chef</h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span
                          className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"
                        ><i className="far fa-paper-plane"></i
                        ></span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">Fastest Order Delivery</h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Home;