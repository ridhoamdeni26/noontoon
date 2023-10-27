import Sidebar from "@/Layouts/Authenticated/Sidebar";
import Topbar from "@/Layouts/Authenticated/Topbar";
import { usePage } from "@inertiajs/react";

export default function Authenticated({ user, children }) {
    const { auth } = usePage().props;

    return (
        <>
            <div className="mx-auto max-w-screen hidden lg:block">
                {/* Start Sidebar */}
                <Sidebar auth={auth} />

                {/* Start Content */}
                <div className="ml-[300px] px-[50px]">
                    <div className="py-10 flex flex-col gap-[50px]">
                        <Topbar name={user.name} />
                        <main>{children}</main>
                    </div>
                </div>
                {/* End Content */}
            </div>
            <div className="mx-auto px-4 w-full h-screen lg:hidden flex bg-black">
                <div className="text-white text-2xl text-center leading-snug font-medium my-auto">
                    Sorry, this page only supported on 1024px screen or above
                </div>
            </div>
        </>
    );
}
