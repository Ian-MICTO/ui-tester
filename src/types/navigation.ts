import type { LinkOptions } from '@tanstack/react-router';
import type { LucideIcon } from "lucide-react";

export type BreadcrumbItem = {
    title: string;
    href: LinkOptions['to'];
};

export type NavItem = {
    title: string;
    to: LinkOptions['to'];
    icon?: LucideIcon | null;
    isActive?: boolean;
    badge?: number | string;
}