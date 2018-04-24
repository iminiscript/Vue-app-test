import User from './components/user/User.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserStart from './components/user/UserStart.vue';
import UserEdit from './components/user/UserEdit.vue';
import Products  from './components/products/Products';
import Form from './components/Form.vue';
import Home from './components/Home.vue';
import Shop from './components/Shop.vue';
import Counter from './components/Counter-page.vue';


export const routes = [
    { path: '', component: Home },
    { path: '/user', component: User, children: [
        {path: '', component: UserStart},
        {path: ':id', component: UserDetail},
        {path: ':id/edit', component: UserEdit, name: 'userEdit'}
    ] },
    {path: '/redirect-me', redirect:'/user'},
    {path: '*', redirect:'/'},
    {path: '/shop', component:Shop, children: [
        {path:'', component: Products }
    ] },
    {path: '/form', component: Form},
    {path: '/counter', component: Counter}
]