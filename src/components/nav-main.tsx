import { useCurrentUrl } from "@/hooks/use-current-url";
import type { NavItem } from "@/types/navigation"
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import { Link } from "@tanstack/react-router";

type Props = {
    items: NavItem[],
    title: string
}

export function NavMain({ items = [], title = 'Platform' }: Props) {
    const { isCurrentUrl } = useCurrentUrl();

    return (
        <SidebarGroup className="px-2 py-0">
            <SidebarGroupLabel>{title}</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                            asChild
                            isActive={isCurrentUrl(item.to)}
                            tooltip={{ children: item.title }}
                        >
                            <Link to={item.to}>
                                {item.icon && <item.icon />}
                                <span>{item.title}</span>
                            </Link>
                        </SidebarMenuButton>
                        {item.badge !== undefined && (
                            <SidebarMenuBadge>
                                {typeof item.badge === 'number' && item.badge > 99
                                    ? '99+'
                                    : item.badge}
                            </SidebarMenuBadge>
                        )}
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    )
}