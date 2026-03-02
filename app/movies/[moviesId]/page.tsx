import MovieDetailPage from "@/components/MovieDetailPage";
import { ActorType } from "@/types/ActorsType";
import { AllGenresType } from "@/types/AllgenresType";
import { MovieActorType } from "@/types/MovieActorType";
import { MovieType } from "@/types/MovieType";
import { SingleGenreType } from "@/types/SingleGenreType";

import { JSX } from "react";

const MovieSinglePage = async ({ params }: { params: Promise<{ moviesId: string }> }): Promise<JSX.Element> => {
    const { moviesId } = await params;
    console.log(moviesId);

    const data = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/movie/${moviesId}`, { next: { revalidate: 3600 } })
    const singleData = await data.json();
    console.log(singleData);

    const res = await fetch("https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/movie_actor", { next: { revalidate: 3600 } })
    const movieActor = await res.json()

    console.log(movieActor);


    const movieActorIds = movieActor
        ?.filter((el: MovieActorType) => el.movie_id === moviesId)
        .map((el: MovieActorType) => el.actor_id);

    console.log(movieActorIds);


    const actor = await fetch("https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/actor", { next: { revalidate: 3600 } })
    const actors = await actor.json();

    const movieAllActors = actors?.filter((el: ActorType) => movieActorIds?.includes(el.id));
    console.log(movieActorIds);

    const movieGenres = await fetch("https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/movie_genre", { next: { revalidate: 3600 } })
    const genres = await movieGenres.json();
    console.log(genres);

    const singleGenres = genres?.filter((el: AllGenresType) =>
        el.movie_id === moviesId
    ).map((el: AllGenresType) =>
        el.genre_id
    )

    const allGenresData = await fetch("https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/genre", { next: { revalidate: 3600 } })
    const allGenres = await allGenresData.json();
    console.log(allGenres);

    const singlePageGenres = allGenres?.filter((el: SingleGenreType) => singleGenres?.includes(el.id))
    console.log(singlePageGenres);


    const allMoviesData = await fetch("https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/movie", { next: { revalidate: 3600 } })
    const allMovies = await allMoviesData.json();
    console.log(allMovies);

    const firstGenreId = singlePageGenres[0]?.id;
    console.log(firstGenreId);

    const moviesWithFirstGenre = genres
        .filter((el: AllGenresType) => el.genre_id === firstGenreId)
        .map((el: AllGenresType) => el.movie_id);

    console.log(moviesWithFirstGenre);


    const recommendedMovies = allMovies
        .filter((el: MovieType) => moviesWithFirstGenre.includes(el.id) && el.id !== singleData.id);

    console.log(recommendedMovies);


    return (
        <div className="container mx-auto">
            <MovieDetailPage recommendedMovies={recommendedMovies} singlePageGenres={singlePageGenres} singleData={singleData} movieAllActors={movieAllActors} />
        </div>
    )
}

export default MovieSinglePage;