<template>
    <div class="registration-page">
        <h1>Registration</h1>
        <form @submit.prevent="submitForm">
            <div>
                <label for="username">Username:</label>
                <input type="text" id="username" v-model="username" required />
            </div>


            <div>
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="password" required />
            </div>
            <button type="submit">Register</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'RegistrationPage',
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        async submitForm() {
            try {
                const response = await axios.post('http://localhost:8081/api/users/register', {
                    username: this.username,
                    password: this.password,
                });
                console.log('Registered user:', response.data);
            } catch (error) {
                console.error('Error while registering:', error.response.data);
            }
        },
    },
};
</script>

<style scoped>
.registration-page {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
    padding: 1rem;
}

.registration-page form {
    display: flex;
    flex-direction: column;
}
</style>
