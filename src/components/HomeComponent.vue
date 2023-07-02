<template>
  <div>
    <p>Welcome to Vuex programming</p>
    <!-- $store.state is used to access to global variables from the Store  -->
    <div class="main-container">
      <div class="sub-container">
        <div class="button-container">
          <!-- <button @click="incrementByOne">+</button> -->
          <!-- Below is the example of using mapAction function increaseByOne  -->
          <!-- <button @click="increaseByOne({ number: 1 })">+</button> -->
          <!-- Below is the example of using mapMutation function incrementByOne  -->
          <button @click="incrementByOne({ number: 1 })">+</button>
          <p>{{ $store.state.count }}</p>
          <button @click="decrementByOne">-</button>
        </div>
        <p>{{ $store.getters.increaseBy100 }}</p>
        <p>{{ $store.getters.increaseBy500 }}</p>
        <p>{{ $store.getters.increaseByX(50) }}</p>
        <p>{{ addXCountToStore(99) + " MapGetter with passing value" }}</p>
        <p>{{ countFromStore + " MapState Example" }}</p>
        <p>{{ countGetterFromStore + " MapGetter Example" }}</p>
        <!-- <p>{{ countGetterFromStore + " MapGetter Example" }}</p> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "HomeComponent",
  computed: {
    ...mapState({
      countFromStore: (state) => state.count,
    }),
    ...mapGetters({
      countGetterFromStore: "increaseBy100",
      addXCountToStore: "increaseByX",
    }),
  },
  methods: {
    ...mapActions({
      increaseByOne: "increaseByOne",
    }),
    ...mapMutations({
      incrementByOne: "incrementByOne"
    }),
    incrementByOne() {
      // 1. Simplest way to update the Store variable
      // this.$store.state.count = 100

      // 2. $store.commit is used to perform a mutation (updation of the store variable).
      // Here we called the Mutation function and provide a payload
      // this.$store.commit("incrementByOne", { number: 1 });

      // 3. $store.commit can also be used like below, this will be sending complete object as payload
      // this.$store.commit({ type: "incrementByOne", number: 1 });

      // 4. Here we will calling the Action. Which will indirectly update the Store variable
      this.$store.dispatch({
        type: "increaseByOne",
        number: 1,
      });
    },
    decrementByOne() {
      // this.$store.commit("decrementByOne", { number: 1 });

      this.$store.dispatch({ type: "decreaseByOne", number: 1 });
    },
  },
};
</script>

<!-- Scoped specifies that the styles only apply to this element's parent element 
and that element's child elements (not the entire document). -->
<!-- It's CSS will be applied to the element of the current component only  -->
<style scoped>
.main-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

button {
  height: 1.5rem;
}

.sub-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.button-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
</style>
