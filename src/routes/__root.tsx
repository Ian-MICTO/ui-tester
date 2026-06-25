import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Home, LayoutDashboard, PenTool } from "lucide-react";

export interface RouterContext {
    queryClient: QueryClient;
}

export const Route = createRootRoute({
    context: () => ({} as RouterContext),
    component: () => {
        const [isOpen, setIsOpen] = useState(true);
        return (
            <div className="flex h-screen">

                {/* Sidebar */}

                <div className={`p-4 bg-gray-900 text-white transition-all duration-300 ${isOpen ? 'w-60' : 'w-20'}`}>

                    <button

                        onClick={() => setIsOpen(!isOpen)}

                        className=" text-left hover:text-primary-300"

                    >

                        {isOpen ? <ChevronLeft /> : <ChevronRight />}

                    </button>

                    {/* <nav className="flex flex-col gap-2"> */}
                    <div className="p-4">

                        <nav className="flex flex-col gap-4 items-start">

                            <Link to="/" className='pl-2 hover:text-primary-300'>

                                {isOpen ? 'Home' : <Home className="h-xs" />}

                            </Link>

                            <Link to="/dashboard" className='pl-2 hover:text-primary-300'>

                                {isOpen ? 'Dashboard' : <LayoutDashboard className="h-xs" />}

                            </Link>

                            {/* <Link to="/posts" className='pl-2 hover:text-primary-300'>

                                {isOpen ? 'Posts' : <PenTool className="h-xs" />}

                            </Link> */}

                        </nav>
                    </div>

                </div>



                {/* Main Content */}

                <div className="flex-1 flex flex-col overflow-y-auto">

                    <Outlet />

                    <TanStackRouterDevtools />

                </div>

            </div>

        );
    }
});