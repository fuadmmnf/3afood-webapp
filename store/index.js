import Vue from 'vue'
import Vuex from 'vuex'

import products from "../data/product.json";


Vue.use(Vuex)

export const state = () => ({
    products: products,
    cart: [],
    spinner:false,
    wishlist: [],
    compare: [],
    user: {
        name:null,
        token:null,
        type:null
    },
})


// your root getters
export const getters = {
    getProducts(state) {
        return state.products
    },

    isAuthenticated(state){
        return (state.user !==null && state.user.token !== null);
    },
    isRetail(state){
        return (state.user !==null && state.user.type === 'retail');
    },
    isWholesale(state){
        return (state.user !==null && state.user.type === 'wholesale');
    },
    isShipSupply(state){
        return (state.user !==null && state.user.type === 'ship_supply');
    },
    getUserType(state){
        return state.user?.type
    },
    getUsername(state){
        return state.user?.name;
    },
    getAccessToken(state){
        return state.user?.token;
    },
    getCart: state => {
        return state.cart
    },

    cartItemCount: state => {
        return state.cart.length
    },

    getWishlist: state => {
        return state.wishlist
    },

    getCompare: state => {
        return state.compare
    },

    wishlistItemCount: state => {
        return state.wishlist.length
    },

    compareItemCount: state => {
        return state.compare.length
    },

    getTotal: state => {
        let total = 0;
        state.cart.forEach(item => {
            total += parseFloat(item.total)
        })

        return total;
    },
    getNewProducts: state => {
        return state.products.filter(item => {
            return item.new
        })
    },
    getBestProducts: state => {
        return state.products.filter(item => {
            return item.best
        })
    },
    getSaleProducts: state => {
        return state.products.filter(item => {
            return item.discount
        })
    },
    categoryList: state => {
        return ["all categories",...new Set(state.products.map((list) => list.category).flat())]
    },
    tagList: state => {
        return [...new Set(state.products.map((list) => list.tag).flat())]
    },
    sizeList: state => {
        return ["all sizes",...new Set(state.products.map((list) => list.variation?.sizes).flat())].filter(Boolean)
    },
    colorList: state => {
        return ["all colors",...new Set(state.products.map((list) => list.variation?.color).flat())].filter(Boolean)
    },
    showSpinner:state =>{
        return state.spinner
    }
}


// contains your mutations
export const mutations = {
    SET_PRODUCT(state, product) {
        state.products = product
    },

    UPDATE_CART(state, payload) {
        const item = state.cart.find(el => payload.id === el.id)
        if (item) {
            item.cartQuantity = item.cartQuantity + payload.cartQuantity;
            if(state.user.type==='retail'){
                item.total = item.cartQuantity * item.price
            }
        } else {
            if(state.user.type==='retail'){
                state.cart.push({...payload, cartQuantity: payload.cartQuantity, total: payload.price })
            }
            else {
                state.cart.push({...payload, cartQuantity: payload.cartQuantity})
            }

        }
    },

    MANUAL_SET_CART_QUANTITY(state, payload) {
        const item = state.cart.find(el => payload.id === el.id)
        if (item) {
            item.cartQuantity = payload.cartQuantity
        }
    },

    REMOVE_PRODUCT_FROM_CART(state, product) {
        state.cart = state.cart.filter(item => {
            return product.id !== item.id
        });
    },

    DECREASE_PRODUCT(state, payload) {
        const found = state.cart.find(el => payload.id === el.id)
        found.cartQuantity = found.cartQuantity - payload.cartQuantity
        if(state.user.type==='retail'){
            found.total = found.cartQuantity * payload.price
        }
    },

    CLEAR_CART(state) {
        state.cart = []
    },

    ADD_TO_WISHLIST(state, product) {
        const item = state.wishlist.find(el => product.id === el.id)
        if(item) {
            return
        } {
            state.wishlist.push(product)
        }
    },

    REMOVE_PRODUCT_FROM_WISHLIST(state, product) {
        state.wishlist = state.wishlist.filter(item => {
            return product.id !== item.id
        });
    },

    ADD_TO_COMPARE(state, product) {
        const item = state.compare.find(el => product.id === el.id)
        if(item) {
            return
        } {
            state.compare.push(product)
        }
    },

    SHOW_MODAL(state, text) {
          this._vm.$modal.show('responseModal',{
              modalText:text
          })
    },

    REMOVE_FROM_COMPARE(state, product) {
        state.compare = state.compare.filter(item => {
            return product.id !== item.id
        });
    },
    SAVE_USER(state, user){
        state.user=user
    },
    UPDATE_USER_NAME(state,name){
        state.user.name=name;
    },
    REMOVE_USER(state,user){
        state.user=null
        state.cart=[]
    },
    SHOW_SPINNER(state){
        state.spinner=true;
    },
    HIDE_SPINNER(state){
        state.spinner=false;
    }
}

function parseCookies(cookieString) {
    return cookieString
        .split(';')
        .map(cookie => cookie.split('='))
        .reduce((accumulator, [key, value]) => {
            accumulator[key.trim()] = decodeURIComponent(value);
            return accumulator;
        }, {});
}

// contains your actions
export const actions = {

    showModal({ commit }, { text }) {
        commit('SHOW_MODAL',text);
    },
    saveUserInfo({commit}, payload){
        commit('SAVE_USER', payload)
    },
    updateUserName({commit},payload){
        commit('UPDATE_USER_NAME', payload)
    },
    logout({commit}){
        commit('REMOVE_USER')
    },
    addToCartItem({commit}, payload) {
        commit('UPDATE_CART', payload)
    },
    manualSetCartQuantity({commit}, payload){
        commit('MANUAL_SET_CART_QUANTITY', payload)
    },

    removeProductFromCart({commit}, product) {
        commit('REMOVE_PRODUCT_FROM_CART', product)
    },

    decreaseProduct({ commit }, product) {
        commit('DECREASE_PRODUCT', product)
    },

    addToWishlist({commit}, payload) {
        commit('ADD_TO_WISHLIST', payload)
    },

    addToCompare({commit}, payload) {
        commit('ADD_TO_COMPARE', payload)
    },

    removeProductFromWishlist({commit}, product) {
        commit('REMOVE_PRODUCT_FROM_WISHLIST', product)
    },

    removeFromCompare({commit}, product) {
        commit('REMOVE_FROM_COMPARE', product)
    },
    showSpinner({commit},payload){
        commit('SHOW_SPINNER',payload)
    },
    hideSpinner({commit},payload){
        commit('HIDE_SPINNER',payload)
    }
}

