import Image from "next/image"

function BannerMovie() {
  return (
    <div className='w-full pb-5'>
        <div className='w-full h-125 bg-zinc-700 rounded-[40px] overflow-hidden'>
          <Image width={100} height={100} className="w-full h-full object-cover" src={"/movieBanner_LE_upscale_prime.jpg"} alt=""/>
        </div>
    </div>
  )
}

export default BannerMovie