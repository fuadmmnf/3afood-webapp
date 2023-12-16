export default async function ( {store,route , redirect}) {
    const requiresAuth =  store.getters.isAuthenticated
    const allowedPaths = ['/','/our-products', '/login','/forgot-password' ,'/register/wholesale', '/register/retail','/about','/services','privacy-policy','/terms-conditions','/online-order','/contact']; // Add allowed paths here
    const isAllowedPath = allowedPaths.includes(route.path);
    // console.log('Middleware running...');
    // console.log('Required Auth:',requiresAuth)
    // console.log('Allowed Path:',isAllowedPath)
    if(requiresAuth || isAllowedPath){
        redirect()
    }
    else
    {
        redirect('/login'); // Redirect to forgot_password page if not authenticated
    }
}