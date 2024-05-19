<template>
    <div class="welcome-area">
        <div class="container">
            <div class="welcome-content text-center">
                <h5>{{ subTitle }}</h5>
                <h1>{{ title }}</h1>
                <p>{{ desc }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: "Welcome To 3A Foods",
                subTitle: "Who Are We",
                desc: "Welcome to 3A Foods, your premier source for quality groceries and meats in South Lake, Western Australia. Established in 2015, we've grown to serve local communities, restaurants, hotels, and cafes statewide, including Port Hedland and Karratha. Explore our wide selection of dry goods, fresh meats, frozen seafood, and ethnic spices tailored to meet the needs of every business, from restaurants to caterers and ships.\n"
            }
        },
    };
</script>
