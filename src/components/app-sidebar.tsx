"use client"

import * as React from "react"

// import { NavMain } from "@/components/nav-main"
// import { NavUser } from "@/components/nav-user"
// import { NavDashboard } from "@/components/nav-dashboard"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { Users, Building2, CalendarCheck2, ClipboardList, SquareUser, LayoutDashboard, LayoutGrid } from "lucide-react"
import { Separator } from "./ui/separator"
// import AppBreadCrumb from "./app-breadcrumb"
import type { NavItem } from "@/types/navigation"
import { NavMain } from "./nav-main"


const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        to: '/dashboard',
        icon: LayoutGrid,
    }
]

// const employeeManagement: NavItem[] = [
//     {
//         title: "Employees",
//         to: "/hris/employees",
//         icon: <Users/>
//     },
//     {
//         title: "Departments",
//         to: "/hris/departments",
//         icon: <Building2/>
//     },
//     {
//         title: "Schedules",
//         to: "/hris/schedules",
//         icon: <CalendarCheck2/>
//     },
//     {
//         title: "Attendances",
//         to: "/hris/attendances",
//         icon: <ClipboardList/>
//     },
// ]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar variant="inset" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <a href="#">
                                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                    <SquareUser />
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-medium">Employee Management</span>
                                    <span className="truncate text-xs"></span>
                                </div>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={mainNavItems} title="Main" />
                {/* <NavMain items={employeeManagement} title="Employee Management" /> */}
                {/* <NavProjects projects={data.projects} /> */}
                {/* <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
            </SidebarContent>
            <SidebarFooter>
                {/* <NavUser user={data.user} url='/' /> */}
            </SidebarFooter>
        </Sidebar>
    )
}
