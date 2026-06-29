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
        return <div>Test</div>
    }
});