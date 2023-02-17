

function Banner() {
  return (
    <div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-medium px-10 py-5 mb-5'>
      <div>
        <h1 className='text-7xl'>My Life in Tech</h1>
        <h2 className="mt-5 md:mt-0">
          Web Projects, Techno-philosophical commentary, My personal IT #Homelab & More
        </h2>
      </div>
      <p className='mt-5 md:mt-2 text-gray-400 max-w-sm'>
        Portfolio of Web Projects || Meandering Thoughts on Tech and Life || Homelab Projects and Guides || List of Linked Articles and Pages to Care About
      </p>
    </div>
  )
}

export default Banner