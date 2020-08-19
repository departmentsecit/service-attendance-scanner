const Dashboard = () => import(/* webpackChunkName: "dashboard" */ './components/Dashboard.vue');
const Users = () => import(/* webpackChunkName: "users" */ './components/Users.vue');
const Scans = () => import(/* webpackChunkName: "scans" */ './components/Scans.vue');
const ProjectSites = () => import(/* webpackChunkName: "project-site" */ './components/projects/ProjectSites.vue');
const ProjectAdd = () => import(/* webpackChunkName: "project-site" */ './components/projects/ProjectAdd.vue');
const FloorNames = () => import(/* webpackChunkName: "project-site" */ './components/FloorNames.vue');


export const routes = [
    {
        path: '/',
        component: Dashboard
    },
    {
        path: '/users',
        component: Users
    },
    {
        path: '/scans',
        component: Scans
    },
    {
        path: '/project-site',
        component: ProjectSites
    },
    {
        path: '/project-site/add',
        component: ProjectAdd
    },
    {
        path: '/floor-names',
        component: FloorNames
    },
];

