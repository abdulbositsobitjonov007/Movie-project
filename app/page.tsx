import Actors from "@/components/Actors"
import BannerMovie from "@/components/BannerMovie"
import MovieCards from "@/components/MovieCards"
import MovieGenres from "@/components/MovieGenres"
import SeriesCards from "@/components/SeriesCards"
import SwiperMovies from "@/components/SwiperMovies"
import TopRatedMovies from "@/components/TopRatedMovies"

function HomePage() {
  return (
    <>
      <section>
        <div className="container mx-auto">
          <SwiperMovies />
        </div>
      </section>
      <MovieGenres />
      <section className="py-8">
        <div className="container mx-auto">
          <h1 className="uppercase text-[22px] pb-6">Mashhur Kinolar</h1>
          <MovieCards />
        </div>
      </section>
      <section className="py-8">
        <div className="container mx-auto">
          <h1 className="uppercase text-[22px] pb-6">Mashhur Seriallar</h1>
          <SeriesCards />
        </div>
      </section>
      <section className="py-8">
        <div className="container mx-auto flex items-start">
          <TopRatedMovies/>
          <div className="flex w-full gap-5 pl-5 flex-col">
            <div>
              <BannerMovie />
            </div>
            <Actors />
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage