import Image from "next/image"

function BannerMovie() {
  return (
    <div className='relative w-full h-full pb-5'>
      <div className='w-full h-125 bg-zinc-700 rounded-[40px] overflow-hidden'>
        <Image width={550} height={500} className="w-full h-full object-cover" quality={100} src={"/movieBanner_LE_upscale_prime.jpg"} alt="" />
      </div>
      <div className="absolute bottom-15 left-10 z-20">
        <p className="text-[#ffffff93] font-bold text-[25px]">Eng sara kino va mulfilmlar TOP<span className="text-[orange]">Kino</span>.NET da</p>
      </div>
      <div className=" absolute w-full top-0 left-0 bg-linear-to-t h-full from-black to-transparent z-10"></div>
    </div>
  )
}

export default BannerMovie