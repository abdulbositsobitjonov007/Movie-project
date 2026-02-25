const actors = [
    { name: "actor 1", role: "role 1" },
    { name: "actor 2", role: "role 2" },
    { name: "actor 3", role: "role 3" },
    { name: "actor 4", role: "role 4" },
    { name: "actor 5", role: "role 5" },
    { name: "actor 6", role: "role 6" },
    { name: "actor 7", role: "role 7" },
    { name: "actor 8", role: "role 8" },
    { name: "actor 9", role: "role 9" },
    { name: "actor 10", role: "role 10" },
];

function Actors() {
  return (
    <div className="grid grid-cols-5 w-full gap-4">

        {
            actors.map((el) => (
                <div className="max-w-50 w-full h-60 bg-zinc-600 rounded-[20px]"
                 key={el.name}>
                    <h2>{el.name}</h2>
                    <p>{el.role}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Actors