import { createRootRoute, Outlet } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";

export interface RouterContext {
    queryClient: QueryClient;
}

export const Route = createRootRoute({
    context: () => ({} as RouterContext),
    component: () => {
        return (
            <div>
                <Outlet />
            </div>
        );
    }
});