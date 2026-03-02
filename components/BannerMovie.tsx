import Image from "next/image"

function BannerMovie() {
  return (
    <div className='w-full'>
        <div className='w-full h-125 bg-zinc-700 rounded-[40px] overflow-hidden'>
          <Image width={100} height={100} className="w-full h-full" src={"/movieBanner.jpg"} alt=""/>
        </div>
    </div>
  )
}

export default BannerMovie