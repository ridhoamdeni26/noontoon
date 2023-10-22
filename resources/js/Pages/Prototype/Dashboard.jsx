import Authenticated from "@/Layouts/Authenticated/Index";
import Flickity from "react-flickity-component";
import { Head } from "@inertiajs/react";
import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";

export default function Dashboard() {
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
        <Authenticated>
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
                    {[1, 2, 3, 4].map((i) => (
                        <FeaturedMovie
                            key={i}
                            slug="the-batman"
                            name={`the batman in love ${i}`}
                            category="batman movie"
                            thumbnail="/images/featured-1.png"
                            rating={i}
                        />
                    ))}
                </Flickity>
            </div>

            <div className="mb-5">
                <div className="font-semibold text-[22px] text-black mb-4">
                    Browse
                </div>
                <Flickity options={flickityOption}>
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <MovieCard
                            key={i}
                            thumbnail={"/images/browse-1.png"}
                            name={`meong golden ${i}`}
                            category="Meong"
                            slug={`meong-golden`}
                        />
                    ))}
                </Flickity>
            </div>
        </Authenticated>
    );
}
