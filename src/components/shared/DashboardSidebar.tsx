import {
  Calendar,
  Home,
  Inbox,
  MessageSquareMoreIcon,
  Search,
  Settings,
  ShipIcon,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { paths } from "@/constants/paths";
import { Link } from "react-router-dom";

const items = [
  {
    title: "Dashboard",
    url: paths.DASHBOARD.MAIN,
    icon: Home,
  },
  {
    title: "Yacht rents",
    url: paths.DASHBOARD.RENTS.LIST,
    icon: ShipIcon,
  },
  {
    title: "Reservations",
    url: paths.DASHBOARD.RESERVATIONS.LIST,
    icon: Calendar,
  },
  {
    title: "Reviews",
    url: paths.DASHBOARD.REVIEWS.LIST,
    icon: MessageSquareMoreIcon,
  },
];

const DashboardSidebar = () => {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default DashboardSidebar;
