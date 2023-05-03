<template>
  <div class="recipe-list">
    <h1>Receptek</h1>
    <input type="text" v-model="searchTerm" placeholder="Keresés..." @input="filterRecipes" />

    <div v-for="recipe in filteredRecipes" :key="recipe.id" class="recipe">
      <h2>{{ recipe.name }}</h2>
      <p><strong>Kategória:</strong> {{ recipe.category }}</p>
      <p><strong>Hozzávalók:</strong></p>
      <ul>
        <li v-for="(ingredient, index) in recipe.ingredients" :key="index">{{ ingredient }}</li>
      </ul>
      <p><strong>Elkészítés:</strong></p>
      <ol>
        <li v-for="(step, index) in recipe.preparation" :key="index">{{ step }}</li>
      </ol>
    </div>
  </div>
</template>



<script>
export default {
  name: 'RecipeList',
  data() {
    return {
      searchTerm: '',
      recipes: [
        {
          id: 1,
          name: 'Csirkepaprikás',
          category: 'Húsételek',
          ingredients: ['csirke', 'hagyma', 'paprika', 'tejföl'],
          preparation: ['Pirítsd meg a hagymát', 'Adj hozzá csirkét és paprikát', 'Főzd meg', 'Tálald tejföllel']
        },
        {
          id: 2,
          name: 'Rántott sajt',
          category: 'Vegetáriánus',
          ingredients: ['sajt', 'liszt', 'tojás', 'zsemlemorzsa', 'olaj'],
          preparation: ['Szeleteld fel a sajtot', 'Panírozd be', 'Süsd ki olajban']
        },
        {
          id: 3,
          name: 'Spagetti Carbonara',
          category: 'Tészták',
          ingredients: ['spagetti', 'szalonna', 'tojás', 'parmezán', 'bors'],
          preparation: ['Főzd meg a tésztát', 'Pirítsd meg a szalonnát', 'Keverd össze a tojást és a parmezánt', 'Öntsd rá a szalonnára és a tésztára']
        },
        {
          id: 4,
          name: 'Zöldségleves',
          category: 'Levesek',
          ingredients: ['zöldségek', 'víz', 'só', 'bors'],
          preparation: ['Tisztítsd meg a zöldségeket', 'Vágd fel őket', 'Főzd meg a zöldségeket', 'Ízesítsd sóval és borssal']
        },
         {
            id: 5,
            name: 'Rakott krumpli',
            category: 'Húsételek',
            ingredients: ['krumpli', 'kolbász', 'tojás', 'tejföl', 'só'],
            preparation: [
              'Főzd meg a krumplit és a tojást',
              'Szeleteld fel a krumplit, a kolbászt és a tojást',
              'Rétegezd a krumplit, kolbászt és tojást egy tepsiben',
              'Öntsd rá a tejfölt',
              'Süsd előmelegített sütőben 180°C-on kb. 40 percig',
            ],
          },
        ],
        filteredRecipes: [],
      };
    },
    created() {
      this.filteredRecipes = this.recipes;
    },
    methods: {
      filterRecipes() {
        this.filteredRecipes = this.recipes.filter((recipe) =>
          recipe.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      },
    },
  };
</script>

<style scoped>
.recipe-list {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
}

.recipe {
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
}

input {
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 16px;
}
</style>
