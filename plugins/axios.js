

export default function ({ $axios,store, redirect ,app}) {
    $axios.interceptors.request.use((config) => {
        const accessToken = store.getters.getAccessToken
        store.dispatch('showSpinner')
        if (accessToken) {
            config.headers.common['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;

        },
        (error) => {
            store.dispatch('hideSpinner')
            // Do something with request error
            return Promise.reject(error);
        }
    );

    $axios.interceptors.response.use(
        (response) => {
            // Hide loader when the response is received();
            store.dispatch('hideSpinner')
            return response;
        },
        (error) => {
            // Hide loader when an error occurs
            store.dispatch('hideSpinner')
            const code = parseInt(error.response && error.response.status);
            if (code === 401) {
            }
            // Example: Show a modal for 500 Internal Server Error
            if (code === 500) {
                store.dispatch('showModal', { text: 'Internal Server Error' });
            }
            // Do something with response error
            return Promise.reject(error);
        }
    );
}
