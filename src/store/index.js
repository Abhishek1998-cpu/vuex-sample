import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  // Initial value of the Store variable will be set here in state object
  state: {
    count: 0,
  },
  //   We can write function to get the Store global variable and use it anywhere
  //   Use for getting custom store values
  getters: {
    // Simple getter
    increaseBy100(state) {
      return state.count + 100;
    },
    // Calling getter inside a getter
    increaseBy500(state, getters) {
      return state.count + getters.increaseBy100 + 500;
    },
    // Passing value to getter and then using it to get a customized value
    increaseByX: (state) => (data) => {
      return state.count + data;
    },
  },
  //   Values of the Store variable will be updated here in Mutation
  //   Just a Reducers in Redux
  mutations: {
    incrementByOne(state, payload) {
      console.log("State = ", state);
      console.log("Payload = ", payload.number);
      state.count = state.count + payload.number;
    },
    decrementByOne(state, payload) {
      console.log("State = ", state);
      console.log("Payload = ", payload.number);
      state.count = state.count - payload.number;
    },
  },
  //   For Updating the Store Variable we can also use the actions
  //   Just as Actions in Redux
  //   API calls and it's data updation things will be done here
  //   Async action with API calls can be done here
  actions: {
    increaseByOne(context, payload) {
      console.log("Context = ", context);
      console.log("Payload = ", payload);
      context.commit("incrementByOne", payload);
    },
    decreaseByOne(context, payload) {
      context.commit("decrementByOne", payload);
    },
  },
  modules: {},
});

export default store;
