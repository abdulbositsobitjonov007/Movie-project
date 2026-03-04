import { ActorType } from "@/types/ActorsType"

const ActorSingle = async ({
    params
}: {
    params: { actorId: string }
}) => {

    const { actorId } = params

    const res = await fetch(
        `https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/actor/${actorId}`,
        { next: { revalidate: 3600 } }
    )

    const actorData = await res.json()
    console.log(actorData);

    const allActors = await fetch(
        `https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/actor`,
        { next: { revalidate: 3600 } }
    )

    const allActorsData = await allActors.json()
    console.log(allActorsData);

    const actor = allActorsData?.find((el: ActorType) => el.id === actorId)
    console.log(actor);

    return (
        <div className="container mx-auto">
            <div>
                page
            </div>
        </div>
    )
}

export default ActorSingle