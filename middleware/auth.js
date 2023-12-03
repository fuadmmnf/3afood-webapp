export default async function ( {store,route , redirect}) {
    const requiresAuth =  store.getters.isAuthenticated
    const allowedPaths = ['/', '/login', '/register/wholesale', '/register/retail','/about','/services','privacy-policy','/terms-conditions']; // Add allowed paths here
    const isAllowedPath = allowedPaths.includes(route.path);
    // console.log('Middleware running...');
    // console.log('Required Auth:',requiresAuth)
    // console.log('Allowed Path:',isAllowedPath)
    if(requiresAuth || isAllowedPath){
        redirect()
    }
    else
    {
        redirect('/register/wholesale'); // Redirect to login page if not authenticated
    }
}