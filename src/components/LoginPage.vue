<template>
    <div class="login-page">
        <h1>Login</h1>
        <form @submit.prevent="submitForm">
            <div>
                <label for="username">Username:</label>
                <input type="text" id="username" v-model="username" required />
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="password" required />
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'LoginPage',
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        async submitForm() {
            try {
                const response = await axios.post('http://localhost:8081/api/users/login', {
                    username: this.username,
                    password: this.password,
                });
                console.log('Logged in user:', response.data);
            } catch (error) {
                console.error('Error while logging in:', error.response.data);
            }
        },
    },
};
</script>

<style scoped>
.login-page {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
    padding: 1rem;
}

.login-page form {
    display: flex;
    flex-direction: column;
}
</style>
