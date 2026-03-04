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
      <section className="pt-5">
        <div className="container mx-auto">
          <div className="relative pl-5">
            <SwiperMovies />
            <div className=" absolute w-[10%] xl:w-[15%] top-0 right-0 bg-linear-to-l h-full from-black to-transparent z-10"></div>
            <div className=" absolute w-[15%] xl:w-[15%] top-0 left-0 bg-linear-to-r h-full from-black to-transparent z-10"></div>
          </div>
        </div>
      </section>
      <MovieGenres />
      <section className="py-8 px-5">
        <div className="container mx-auto">
          <h1 className="uppercase text-[22px] pb-6">Mashhur Kinolar</h1>
          <MovieCards />
        </div>
      </section>
      <section className="py-8 px-5">
        <div className="container mx-auto">
          <h1 className="uppercase text-[22px] pb-6">Mashhur Seriallar</h1>
          <SeriesCards />
        </div>
      </section>
      <section className="py-8 px-5">
        <div className="container mx-auto flex flex-col gap-5 lg:gap-0 lg:flex-row items-start">
          <TopRatedMovies />
          <div className="flex w-full gap-5 md:pl-5 flex-col">
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