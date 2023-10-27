import Authenticated from "@/Layouts/Authenticated/Index";
import Flickity from "react-flickity-component";
import { Head } from "@inertiajs/react";
import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";

export default function Dashboard({ auth, movieFeature, movies }) {
    const flickityOption = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };
    return (
        <Authenticated user={auth.user}>
            <Head title="Dasboard">
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
            </Head>
            <div className="mb-5">
                <div className="font-semibold text-[22px] text-black mb-4">
                    Featured Movies
                </div>
                <Flickity className="gap-[30px]" options={flickityOption}>
                    {movieFeature.map((movieFeature) => (
                        <FeaturedMovie
                            key={movieFeature.id}
                            slug={movieFeature.slug}
                            name={movieFeature.name}
                            category={movieFeature.category}
                            thumbnail={movieFeature.thumbnail}
                            rating={movieFeature.rating}
                        />
                    ))}
                </Flickity>
            </div>

            <div className="mb-5">
                <div className="font-semibold text-[22px] text-black mb-4">
                    Browse
                </div>
                <Flickity options={flickityOption}>
                    {movies.map((movies) => (
                        <MovieCard
                            key={movies.id}
                            thumbnail={movies.thumbnail}
                            name={movies.name}
                            category={movies.name}
                            slug={movies.slug}
                        />
                    ))}
                </Flickity>
            </div>
        </Authenticated>
    );
}
