import ActorSinglePage from "@/components/ActorSinglePage"


const ActorSingle = async ({
    params
}: {
    params: { actorId: string }
}) => {

    const { actorId } = await params;

    const res = await fetch(
        `https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/actor/${actorId}`,
        { next: { revalidate: 3600 } }
    )

    const actorData = await res.json()
    console.log(actorData);


    return (
        <div className="container mx-auto">
            <div>
                <ActorSinglePage actor={actorData} />
            </div>
        </div>
    )
}

export default ActorSingle