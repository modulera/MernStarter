// pages
import Dashboard from "../pages/dashboard";
import Typography from "../pages/typography";
import Notifications from "../pages/notifications";
import Maps from "../pages/maps";
import Tables from "../pages/tables";
import Icons from "../pages/icons";
import Charts from "../pages/charts";

const routes = [
  {
    path: '/app/dashboard',
    component: Dashboard,
    isPrivate: true,
  },
  {
    path: '/app/typography',
    component: Typography,
    isPrivate: true,
  },
  {
    path: '/app/tables',
    component: Tables,
    isPrivate: true,
  },
  {
    path: '/app/notifications',
    component: Notifications,
    isPrivate: true,
  },
  {
    path: '/app/ui/maps',
    component: Maps,
    isPrivate: true,
  },
  {
    path: '/app/ui/icons',
    component: Icons,
    isPrivate: true,
  },
  {
    path: '/app/ui/charts',
    component: Charts,
    isPrivate: true,
  }
];

export default routes;
