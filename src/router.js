import { createRouter, createWebHistory } from 'vue-router';
import TheWelcome from './components/TheWelcome.vue';
import LoginPage from './components/LoginPage.vue';
import RegistrationPage from './components/RegistrationPage.vue'
import RecipeList from './components/RecipeList.vue';

/*
import LoginPage from './pages/LoginPage.vue';
import RegisterPage from './pages/RegisterPage.vue';
*/

const routes = [
    {
        path: '/',
        name: 'home',
        component: TheWelcome,
    },

    {
        path: '/login',
        name: 'login',
        component: LoginPage,
    },
    {
        path: '/register',
        name: 'register',
        component: RegistrationPage,
    },
    {
        path: '/recipes',
        name: 'Recipes',
        component: RecipeList,
    },


];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
