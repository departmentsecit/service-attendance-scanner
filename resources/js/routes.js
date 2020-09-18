const Dashboard = () => import(/* webpackChunkName: "dashboard" */ './components/Dashboard.vue');
const Users = () => import(/* webpackChunkName: "users" */ './components/Users.vue');
const Scans = () => import(/* webpackChunkName: "scans" */ './components/Scans.vue');
const ProjectSites = () => import(/* webpackChunkName: "project-site" */ './components/projects/ProjectSites.vue');
const ProjectAdd = () => import(/* webpackChunkName: "project-add" */ './components/projects/ProjectAdd.vue');
const ProjectViewEdit = () => import(/* webpackChunkName: "project-view-edit" */ './components/projects/ProjectViewEdit.vue');
const FloorNames = () => import(/* webpackChunkName: "floor-names" */ './components/FloorNames.vue');


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
    {
        path: '/project-site/info',
        component: ProjectViewEdit,
        props:(route)=>({
            t:  route.query.t,
            pId:  route.query.pId, // project id
        })
    },
];

