import { createStore } from 'vuex';
import axios from 'axios';
const renderURL = "https://usedgoods.onrender.com";

// let {fullname, email, userpassword, userRole,
//   phonenumber, joinDate } = payload;

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    spinnerStatus: true,
    message: null
  },
  getters: {
  spinnerStatus(state) {
    return state.spinnerStatus
  }

  },
  mutations: {
    setUsers(state, values){
      state.users = values
    },
    setUser(state, value){
      state.user = value
    },
    setMessage(state, value){
      state.message = value
    },
    setProducts(state, values) {
      state.products = values
    },
    spinnerStatus(state, newSpinnerStatus) {
      state.spinnerStatus = newSpinnerStatus
    }
  },
  actions: {
    async fetchUsers(context){
      const res = await axios.get(`${renderURL}/users`);
      const {results, err} = await res.data;
      if(results){
        context.commit('setUsers', results);
      } else {
        context.commit('setMessage', err);
      }
    },
    async fetchProducts(context){
      context.commit('spinnerStatus', true)

      const res = await axios.get(`${renderURL}/products`);
      const {results, err} = await res.data;
      if(results){
        context.commit('setProducts', results);
        context.commit('spinnerStatus', false);
      } else {
        context.commit('setMessage', err);
        context.commit('spinnerStatus', true);

      }
    },
    async fetchSingleProduct(context){
      context.commit('spinnerStatus', true)

      const res = await axios.get(`${renderURL}/products`);
      const {results, err} = await res.data;
      if(results){
        context.commit('setProducts', results[0]);
        context.commit('spinnerStatus', false);
      } else {
        context.commit('setMessage', err);
      }
    },
    deleteUser: async (context, id)=> {
      let res = await axios.delete(`${renderURL}users/${id}`);
      if(res) {
        context.dispatch("fetchUsers");
      }
    },

  //   async updateUser(context, payload, id) {
  //     payload;
  //     const data = {
  //       fullname, 
  //       email,
  //       userpassword,
  //       userRole,
  //       phonenumber,
  //       joinDate
  //     };
  //     try{
  //       let res = await axios.put(`${renderURL}users/${id}`, data);
  //       let {results}  = await res.data;
  //       if(results) {
  //         context.commit('setUsers', results);
  //         router.push({name: "login"});
  //       }
  //     }catch(e) {
  //       console.lolg(e);    
  //     }
  //   },
   

  //   //Signup
  //   async signUp(context, payload) {
  //     payload;
  //     const data = {
  //       fullname, 
  //       email,
  //       userpassword,
  //       userRole,
  //       phonenumber,
  //       joinDate
  //     };
  //     try{
  //       let res = await axios.post(jtlaptopsURL+"users", data);
  //       let {results}  = await res.data;
  //       if(results) {
  //         context.commit('setUsers', results);
  //         router.push({name: "login"});
  //       }
  //     }catch(e) {
  //       console.lolg(e);    
  //     }
  //   }
  // },
  // modules: {
  }
})
