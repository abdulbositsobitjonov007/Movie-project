import { ActorType } from '@/types/ActorsType'

import Image from 'next/image'

function ActorSinglePage({ actor }: { actor: ActorType  }) {
    return (
        <div>
            <div key={actor.id}>
                <div className="w-full h-50 rounded-2xl overflow-hidden">
                    <Image width={100} height={150} src={actor.photo_url} alt={actor.full_name} />
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default ActorSinglePage;