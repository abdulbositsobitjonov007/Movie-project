import { ActorType } from "@/types/ActorsType";
import Image from "next/image";

const Actors = async() => {

    const actors = await fetch("https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/actor", { next: { revalidate: 3600 } })
    const allActors = await actors.json();

  return (
    <div className="grid grid-cols-5 w-full gap-5">

        {
            allActors?.slice(0, 10)?.map((el:ActorType) => (
                <div className="max-w-50 w-full h-60 rounded-[20px]"
                 key={el.id}>
                    <div className="w-full h-50 rounded-2xl overflow-hidden">
                        <Image width={100} height={150} style={{width:"100%", height:"100%"}} className="w-full h-full object-cover hover:scale-[1.1] duration-300
                        " src={el.photo_url} alt={el.full_name} />
                    </div>
                    <h2 className="leading-5 pt-1 text-[14px] text-center">{el.full_name}</h2>
                    
                </div>
            ))
        }
    </div>
  )
}

export default Actors