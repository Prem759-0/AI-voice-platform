import { cookies } from "next/headers";

import {
  SidebarInset,
  SidebarProvider
} from "@/components/ui/sidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
        <div>
         {children}
        </div>
    )
}
