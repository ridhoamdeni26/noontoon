import Authenticated from "@/Layouts/Authenticated/Index";
import PrimaryButton from "@/Components/PrimaryButton";
import FlashMessage from "@/Components/FlashMessage";
import { Link, Head } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";

export default function Index({ auth }) {
    const { flashMessage, movies } = usePage().props;
    return (
        <Authenticated user={auth.user}>
            <Head title="Admin - List Movie" />
            <Link href={route("admin.dashboard.movie.create")}>
                {flashMessage?.message && (
                    <FlashMessage message={flashMessage.message} />
                )}
                <PrimaryButton type="button" className="w-40 mb-8">
                    Insert New Movie
                </PrimaryButton>
            </Link>

            <div className="py-12">
                <div className="max-w-7x mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-500 text-gray-600 p-4 dark:text-gray-50 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="flex item-center justify-between">
                            <table className="w-full">
                                <thead>
                                    <tr className="[&>th]:p-2 bg-slate-300">
                                        <th className="text-left">No</th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Category</th>
                                        <th>Rating</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {movies.map((movie) => (
                                        <tr
                                            key={movie.id}
                                            className="[&>td]:p-2"
                                        >
                                            <td>{movie.id}</td>
                                            <td>
                                                <img
                                                    src={`/storage/${movie.thumbnail}`}
                                                    className="w-32 rounded-md"
                                                />
                                            </td>
                                            <td>{movie.name}</td>
                                            <td>{movie.category}</td>
                                            <td>{movie.rating.toFixed(1)}</td>
                                            <td>
                                                <Link
                                                    href={route(
                                                        "admin.dashboard.movie.edit",
                                                        movie.id
                                                    )}
                                                >
                                                    <PrimaryButton
                                                        type="button"
                                                        variant="warning"
                                                    >
                                                        Edit
                                                    </PrimaryButton>
                                                </Link>
                                            </td>
                                            <td>
                                                <PrimaryButton
                                                    type="button"
                                                    variant="danger"
                                                >
                                                    Delete
                                                </PrimaryButton>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
