<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
    <header>
        <nav>
            <ul>
                <li><router-link to="/recipes">Receptek</router-link></li>
                <li><router-link to="/login">Bejelentkezés</router-link></li>
                <li><router-link to="/register">Regisztráció</router-link></li>
            </ul>
        </nav>


    </header>

    <main>

        <router-view></router-view>
    </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
