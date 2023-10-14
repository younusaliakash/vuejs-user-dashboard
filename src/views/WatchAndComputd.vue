<script setup>
  import { ref, computed, watch } from 'vue';

  const firstName = ref('');
  const lastName = ref('');
  const totalCharacters = ref('');

  const fullName = computed(() => {
    return `${firstName.value}  ${lastName.value}`;
  });
  
  watch(fullName, (newVal, oldVal) => {
        const stringWithoutSpaces = newVal.replace(/\s/g, "");
        totalCharacters.value = stringWithoutSpaces.length;
    },
    { immediate: false } 
  );
</script>
  
<template>
    <div>
       <p>Your name is : {{ fullName }}</p>
       <p>Your name has {{ totalCharacters }} characters</p>

        <input v-model="firstName" placeholder="First Name">
        <input v-model="lastName" placeholder="Last Name">
    </div>
</template>