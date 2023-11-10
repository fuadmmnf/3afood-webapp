import {store} from "core-js/internals/reflect-metadata";
import * as $store from "@/store";

export default async function ( { to, from, next }) {
    const requiresAuth =$store.getters.isAuthenticated;
    if (!requiresAuth) {
        console.log("Not authenticated");
        next("/login"); // Redirect to login page if not authenticated
    } else {
        next(); // Proceed to the requested route
    }
}

