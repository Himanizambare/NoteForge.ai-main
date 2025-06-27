"use client";

import * as React from "react";
import { LayoutPanelLeft, Plus, ShieldEllipsis, Brain } from "lucide-react";
import Link from "next/link";
import { useQuery } from "convex/react";

import { Id } from "../../convex/_generated/dataModel";

import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";


import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Separator } from "./ui/separator";
import UploadPdfFile from "./upload-pdf";
import { Progress } from "./ui/progress";
import { api } from "../../convex/_generated/api";

const data = {
  navMain: [
    {
      title: "Workspace",
      url: "/dashboard",
      icon: LayoutPanelLeft,
    },
    {
      title: "Upgrade plan",
      url: "/dashboard/upgrade",
      icon: ShieldEllipsis,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { isLoaded, user } = useUser();
  const email = user?.primaryEmailAddress?.emailAddress ?? null;

  const userPdfs = useQuery(
    api.fileStorage.getUserPdfs,
    isLoaded && email ? { email } : "skip"
  );


  const plan = useQuery(
    api.user.fetchUserPlan,
    isLoaded && email ? { email } : "skip"
  );


  //const limitReached = !!(userPdfs && plan === "free" && userPdfs.length >= 5);

  const limitReached=false;
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
                  <Brain className="h-6 w-6 text-blue-600" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Notely.ai</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <Separator className="mb-5" />

      <UploadPdfFile limitReached={limitReached}>
        <Plus />
        Upload PDF
      </UploadPdfFile>

      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>

      <SidebarFooter>
  {userPdfs && (
    <div className="text-sm text-muted-foreground mb-2">
      Total PDFs: {userPdfs.length}
    </div>
  )}
  <NavUser />
</SidebarFooter>

    </Sidebar>
  );
}
