

export default function ({ $axios,store, redirect ,app}) {
    $axios.interceptors.request.use((config) => {
        const accessToken = store.getters.getAccessToken
        if (accessToken) {
            config.headers.common['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
    });


    $axios.onError((error) => {
        const code = parseInt(error.response && error.response.status);

        if (code === 401) {

        }

        // Example: Show a modal for 500 Internal Server Error
        if (code === 500) {
            store.dispatch('showModal', { text: 'Internal Server Error' });
        }

        // Add more cases for different status codes as needed

        return Promise.reject(error);
    });

}
