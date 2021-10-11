import { Dashboard, Posts, Typography, Notifications, Maps, Tables, Icons, Charts, Error } from '../pages/Admin/index';

const AdminRoutes = [
  {
    path: '/admin/dashboard',
    component: Dashboard,
    isPrivate: true,
  },
  {
    path: '/admin/posts',
    component: Posts,
    isPrivate: true,
  },
  {
    path: '/admin/typography',
    component: Typography,
    isPrivate: true,
  },
  {
    path: '/admin/notifications',
    component: Notifications,
    isPrivate: true,
  },
  {
    path: '/admin/maps',
    component: Maps,
    isPrivate: true,
  },
  {
    path: '/admin/tables',
    component: Tables,
    isPrivate: true,
  },
  {
    path: '/admin/ui/maps',
    component: Maps,
    isPrivate: true,
  },
  {
    path: '/admin/ui/icons',
    component: Icons,
    isPrivate: true,
  },
  {
    path: '/admin/ui/charts',
    component: Charts,
    isPrivate: true,
  },
  {
    path: '*',
    component: Error,
    isPrivate: false,
  }
];

export { AdminRoutes };
