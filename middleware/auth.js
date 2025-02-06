export default async function ( {store,route , redirect}) {
    const requiresAuth =  store.getters.isAuthenticated
    const allowedPaths = ['/','/category' ,'/login','/forgot-password' ,'/register/wholesale','/register/ship_supply', '/register/retail','/about','/services','/privacy-policy','/faqs','/terms-conditions','/contact']; // Add allowed paths here
    const isAllowedPath = allowedPaths.includes(route.path) || route.path.startsWith('/category/');
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