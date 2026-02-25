"use client";

const items = [
    { title: "Film 1", desc: "Description" },
    { title: "Film 2", desc: "Description" },
    { title: "Film 3", desc: "Description" },
    { title: "Film 4", desc: "Description" },
    { title: "Film 5", desc: "Description" },
    { title: "Film 6", desc: "Description" },
    { title: "Film 7", desc: "Description" },
    { title: "Film 8", desc: "Description" },
];

export default function TopRatedMovies() {
    return (
        <div className="max-w-130 w-full border-2 border-zinc-700 rounded-[40px] p-5 flex flex-col gap-4">

            {/* top small block */}
            <h1 className="uppercase pt-5 text-[22px] font-bold">Reytingi baland kinolar</h1>

            {/* cards */}
            <div className="w-full flex flex-col gap-4">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="flex w-full items-center gap-3 bg-orange-900/40 rounded-xl p-3 shadow-sm"
                    >
                        {/* image placeholder */}
                        <div className="w-20 h-20 bg-zinc-300 rounded-md"></div>

                        {/* text */}
                        <div className="flex flex-col gap-1">
                            <h2>{item.title}</h2>
                            <p>reyting</p>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}