import { useLocation, useMatchRoute } from '@tanstack/react-router';
import type { LinkOptions } from '@tanstack/react-router';

// 1. Swap Inertia's href type with TanStack's type-safe routing options
export type IsCurrentUrlFn = (
    urlToCheck: LinkOptions['to'],
    startsWith?: boolean,
) => boolean;

export type UseCurrentUrlReturn = {
    currentUrl: string;
    isCurrentUrl: IsCurrentUrlFn;
};

export function useCurrentUrl(): UseCurrentUrlReturn {
    const location = useLocation();
    const matchRoute = useMatchRoute();

    // Replaces the new URL(page.url).pathname fallback block safely
    const currentUrlPath = location.pathname;

    const isCurrentUrl: IsCurrentUrlFn = (
        urlToCheck: LinkOptions['to'],
        startsWith: boolean = false,
    ) => {
        // matchRoute returns route parameters if matching, or false if not.
        // Setting `fuzzy: true` replaces the manual .startsWith() string matching logic.
        const isMatched = matchRoute({
            to: urlToCheck,
            fuzzy: startsWith,
        });

        return !!isMatched;
    };

    return {
        currentUrl: currentUrlPath,
        isCurrentUrl
    };
}