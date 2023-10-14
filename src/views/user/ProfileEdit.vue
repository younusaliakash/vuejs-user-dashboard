<script setup>
import {ref, reactive, onBeforeMount, computed, watch} from 'vue';
import router from '../../router/index';
import authStore from '../../stores/authStore';
const auth = authStore();

import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const notify = (message) => {
  toast(message, {
    autoClose: 4000,
    position: toast.POSITION.TOP_RIGHT,
  });
}

const formData = reactive({});

onBeforeMount(() =>{
    Object.assign(formData, JSON.parse(localStorage.getItem("profile")));
    age.value = formData.age;
    birthDate.value = formData.birthDate;
});

const age = ref();
const eligibilityStatus = ref('');
const birthDate = ref('');

const calculatedBirthDate = computed(() => {
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - age.value;
    return `${birthYear}-01-01`;
});

const calculatedAge = computed(() => {
    const birthYear = new Date(birthDate.value).getFullYear();
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
});


watch(calculatedBirthDate, (newValue, old) => {
    birthDate.value = newValue;
}, {immediate: true});

watch(calculatedAge, (newValue, old) => {
    age.value = newValue;
}, {immediate: true});

watch(age, (newAge, oldAge) => {
    eligibilityStatus.value = newAge >= 18 ? 'Eligible for voting' : 'Not eligible for voting';
}, {immediate: true});

function updateProfile(){
    formData.age = age;
    formData.birthDate = birthDate;

    localStorage.setItem('profile', JSON.stringify(formData));
    notify("Profile Updated");
    router.push('/profile');
}



</script>
<template>
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
        <div class="-mx-3 md:flex mb-6">
            <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                First Name
            </label>
            <input v-model="formData.firstName"  class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Jane">
            </div>
            <div class="md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
                Last Name
            </label>
            <input v-model="formData.lastName" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Doe">
            </div>
        </div>
        <div class="-mx-3 md:flex mb-6">
            <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                Gender
            </label>
            <input v-model="formData.gender"  class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Jane">
            </div>
            <div class="md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
                Blood Group
            </label>
            <input v-model="formData.bloodGroup" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Doe">
            </div>
        </div>
        <div class="-mx-3 md:flex mb-6">
            <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                Email
            </label>
            <input v-model="formData.email"  class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Jane">
            </div>
            <div class="md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
                Phone
            </label>
            <input v-model="formData.phone" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Doe">
            </div>
        </div>
        
        <div class="-mx-3 md:flex mb-6">
            <div class="md:w-full px-3">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
                Image
            </label>
            <input v-model="formData.image" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" type="text" >
            </div>
        </div>
        <div class="-mx-3 md:flex mb-2">
            <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
                    Age <span class="text-red-500">{{ eligibilityStatus }}</span>
                </label>
                <input v-model="age"  class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-city" type="text" placeholder="Age">
            </div>
                <div class="md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-zip">
                    Birth Date
                </label>
                <input v-model="birthDate" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-zip" type="date" placeholder="2023-10-14">
            </div>

        </div>
        <button @click.prevent="updateProfile()" class="block w-full text-center text-white bg-blue-600 text-sm font-semibold rounded-lg hover:bg-blue-500 focus:outline-none focus:shadow-outline focus:bg-blue-500 hover:shadow-xs p-3 my-4">Update My Profile</button>
    </div>
</template>