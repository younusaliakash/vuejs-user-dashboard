<script setup>
import { RouterView } from 'vue-router';
import Header from './Header.vue';
import Sidebar from './Sidebar.vue';
import Footer from './Footer.vue';

</script>
<template>
    <Header></Header>
    <Sidebar></Sidebar>
    <div class="p-4 sm:ml-64">
        <div class="p-4 border-1 rounded-lg  mt-14 sketch-shadow">
            <router-view></router-view>
        </div>
    </div>
    <Footer></Footer>
</template>