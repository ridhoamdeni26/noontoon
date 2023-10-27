import Authenticated from "@/Layouts/Authenticated/Index";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import Checkbox from "@/Components/Checkbox";
import PrimaryButton from "@/Components/PrimaryButton";
import { router } from "@inertiajs/react";

export default function Edit({ auth }) {
    const { movie } = usePage().props;

    const { data, setData, processing, errors } = useForm({
        ...movie,
    });

    const submit = (e) => {
        e.preventDefault();

        if (data.thumbnail === movie.thumbnail) {
            delete data.thumbnail;
        }

        router.post(route("admin.dashboard.movie.update", movie.id), {
            _method: "put",
            ...data,
        });
    };

    return (
        <Authenticated user={auth.user}>
            <Head title="Admin - Create Movie" />
            <h1 className="text-xl">Update Movie : {movie.name}</h1>
            <hr className="mb-4" />
            <form onSubmit={submit}>
                <div className="flex flex-col gap-6">
                    <div>
                        <InputLabel value="Name" />
                        <TextInput
                            type="text"
                            name="name"
                            defaultValue={movie.name}
                            placeholder="Enter the name of movie"
                            variant="primary-outline"
                            onChange={(e) => setData("name", e.target.value)}
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel value="Category" className="mt-4" />
                        <TextInput
                            type="text"
                            name="category"
                            defaultValue={movie.category}
                            placeholder="Enter the category of movie"
                            variant="primary-outline"
                            onChange={(e) =>
                                setData("category", e.target.value)
                            }
                        />

                        <InputError
                            message={errors.category}
                            className="mt-2"
                        />
                    </div>

                    <div>
                        <InputLabel value="Video URL" className="mt-4" />
                        <TextInput
                            type="text"
                            name="video_url"
                            defaultValue={movie.video_url}
                            placeholder="Enter the video url of movie"
                            variant="primary-outline"
                            onChange={(e) =>
                                setData("video_url", e.target.value)
                            }
                        />

                        <InputError
                            message={errors.video_url}
                            className="mt-2"
                        />
                    </div>

                    <div>
                        <InputLabel value="Thumbnail" className="mt-4" />
                        <img src={`/storage/${movie.thumbnail}`} alt="" />
                        <TextInput
                            type="file"
                            name="thumbnail"
                            placeholder="Insert thumbnail of the movie"
                            variant="primary-outline"
                            onChange={(e) =>
                                setData("thumbnail", e.target.files[0])
                            }
                        />

                        <InputError
                            message={errors.thumbnail}
                            className="mt-2"
                        />
                    </div>

                    <div>
                        <InputLabel value="Rating" className="mt-4" />
                        <TextInput
                            type="number"
                            name="rating"
                            defaultValue={movie.rating}
                            placeholder="Enter rating from video"
                            variant="primary-outline"
                            onChange={(e) => setData("rating", e.target.value)}
                        />

                        <InputError
                            message={errors.video_url}
                            className="mt-2"
                        />
                    </div>

                    <div className="flex flex-row mt-4 items-center">
                        <InputLabel value="IS Featured" className="mt-1 mr-2" />
                        <Checkbox
                            name="is_featured"
                            onChange={(e) =>
                                setData("is_featured", e.target.checked)
                            }
                            checked={movie.is_featured}
                        ></Checkbox>
                    </div>
                    <PrimaryButton
                        type="submit"
                        className="mt-4 w-40"
                        disabled={processing}
                    >
                        Submit
                    </PrimaryButton>
                </div>
            </form>
        </Authenticated>
    );
}
