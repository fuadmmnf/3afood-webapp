
export default async function ( { to, from, next }) {
    const requiresAuth = true;
    console.log("Watching from route middleware")
    if (requiresAuth) {
        console.log("Not authenticated");
        next("/login"); // Redirect to login page if not authenticated
    } else {
        next(); // Proceed to the requested route
    }
}

