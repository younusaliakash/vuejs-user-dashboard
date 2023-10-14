<script setup>
    import { ref, onBeforeMount } from 'vue';
    import authStore from '../../stores/authStore';
    import { RouterLink } from 'vue-router';

    const auth = authStore();

    onBeforeMount(() =>{
        auth.profile = JSON.parse(localStorage.getItem("profile"));
    });
</script>
<template>

<div class="bg-gray-100">
    <div class="container mx-auto p-4">
        <div class="md:flex no-wrap md:-mx-2 ">
            <!-- Left Side -->
            <div class="w-full md:w-3/12 md:mx-2">
                <!-- Profile Card -->
                <div class="bg-white p-3 border-t-4 border-green-400">
                    <div class="image overflow-hidden">
                        <img class="h-auto w-full mx-auto" :src="auth.profile.image" alt="">
                    </div>
                    <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">{{ auth.profile.firstName }} {{ auth.profile.lastName }} </h1>
                    <!-- <h3 class="text-gray-600 font-lg text-semibold leading-6">{{ auth.profile.university}}</h3> -->
                    <!-- <h3 class="text-gray-600 text-center font-lg font-semibold text-semibold leading-6">{{ company.name }}</h3> -->
                    <!-- <p class="text-sm text-gray-500 hover:text-gray-600 leading-6">Lorem ipsum dolor sit amet
                        consectetur adipisicing elit.
                        Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p> -->
                    <ul
                        class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                        <li class="flex items-center py-3">
                            <span class="bg-green-500 py-1 px-2 rounded text-white text-sm ">{{ auth.profile.age >= 18 ? 'Eligible for voting' : 'Not eligible for voting' }}</span>
                        </li>
                        <li class="flex items-center py-3">
                            <span>Age</span>
                            <span class="ml-auto">{{ auth.profile.age }}</span>
                        </li>
                    </ul>
                </div>
                <!-- End of profile card -->
                <div class="my-4"></div>
            </div>
            <!-- Right Side -->
            <div class="w-full md:w-9/12 mx-2 h-64">
                <!-- Profile tab -->
                <!-- About Section -->
                <div class="bg-white p-3 shadow-sm rounded-sm">
                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span clas="text-green-500">
                            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <span class="tracking-wide">About</span>
                    </div>
                    <div class="text-gray-700">
                        <div class="grid md:grid-cols-2 text-sm">
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">First Name</div>
                                <div class="px-4 py-2">{{ auth.profile.firstName }}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Last Name</div>
                                <div class="px-4 py-2">{{ auth.profile.lastName }}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Maiden Name</div>
                                <div class="px-4 py-2">{{ auth.profile.maidenName }}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Gender</div>
                                <div class="px-4 py-2">{{ auth.profile.gender }}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Email</div>
                                <a class="text-blue-800 px-4 py-2" :href="`mailto:${auth.profile.email}`">{{ auth.profile.email }}</a>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Phone</div>
                                <div class="px-4 py-2">{{ auth.profile.email }}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Blood Group</div>
                                <div class="px-4 py-2">
                                    <div class="px-4 py-2">{{ auth.profile.bloodGroup }}</div>
                                </div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Birthday</div>
                                <div class="px-4 py-2">{{ auth.profile.birthDate }}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Height</div>
                                <div class="px-4 py-2">{{ auth.profile.height }}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Weight</div>
                                <div class="px-4 py-2">{{ auth.profile.weight }}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Eye Color</div>
                                <div class="px-4 py-2">{{ auth.profile.eyeColor }}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Web Site</div>
                                <div class="px-4 py-2">{{ auth.profile.domain}}</div>
                            </div>
                        </div>
                    </div>
                    <router-link to="/profile/edit"
                        class="block w-full text-center text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">Edit My Profile</router-link>
                </div>   
            </div>
        </div>
    </div>
</div>
</template>
<style>
    :root {
        --main-color: #4a76a8;
    }

    .bg-main-color {
        background-color: var(--main-color);
    }

    .text-main-color {
        color: var(--main-color);
    }

    .border-main-color {
        border-color: var(--main-color);
    }
</style>