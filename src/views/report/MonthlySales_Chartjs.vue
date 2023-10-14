<script setup>
import {ref, reactive, computed, watch } from 'vue';
import { Dropdown, ListGroup, ListGroupItem } from 'flowbite-vue'
import { Bar} from 'vue-chartjs'
import { 
    Chart as ChartJS, 
    Title, 
    Tooltip, 
    Legend, 
    BarElement, 
    ArcElement, 
    CategoryScale, 
    LinearScale,
    PointElement,
    LineElement,
} from 'chart.js';

ChartJS.register(
    Title, 
    Tooltip, 
    Legend, 
    BarElement, 
    ArcElement ,
    CategoryScale, 
    LinearScale,
    PointElement,
    LineElement,
);

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false
}

const data = reactive([
    {
        month: 'January',
        sales: 500,
        status:true
    },
    {
        month: 'February',
        sales: 600,
        status:true
    },
    {
        month: 'March',
        sales: 700,
        status:true
    },
    {
        month: 'April',
        sales: 800,
        status:true
    },
    {
        month: 'May',
        sales: 900,
        status:true
    },
    {
        month: 'June',
        sales: 1000,
        status:true
    },
    {
        month: 'July',
        sales: 950,
        status:true
    },
    {
        month: 'August',
        sales: 800,
        status:true
    },
    {
        month: 'September',
        sales: 500,
        status:true
    },
    {
        month: 'October',
        sales: 600,
        status:true
    },
    {
        month: 'November',
        sales: 850,
        status:true
    },
    {
        month: 'December',
        sales: 900,
        status:true
    },
]);

const filteredData = computed(() => {
    return data.filter(item => item.status === true);
});

const months = ref([]);
const sales = ref([]);

watch(filteredData, (newVal, oldVal) =>{
    months.value = newVal.map(item => item.month);
    sales.value = newVal.map(item => item.sales);
}, {deep: true, immediate: true});


const barChartData = computed(() => {
    return {
        labels: months.value,
        datasets: 
        [
            {
                label: 'Monthly Sales',
                backgroundColor: '#f87979',
                data: sales.value,
            }
        ],
    };
});
</script>
<template>
    <dropdown text="Export">
        <list-group>
            <list-group-item>
                <template #prefix>
                    <svg class="w-[19px] h-[19px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 18a.969.969 0 0 0 .933 1h12.134A.97.97 0 0 0 15 18M1 7V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2v5M6 1v4a1 1 0 0 1-1 1H1m0 9v-5h1.5a1.5 1.5 0 1 1 0 3H1m12 2v-5h2m-2 3h2m-8-3v5h1.375A1.626 1.626 0 0 0 10 13.375v-1.75A1.626 1.626 0 0 0 8.375 10H7Z"/>
                    </svg>
                </template>
                Export ad PDF
            </list-group-item>
            <list-group-item>
                <template #prefix>
                    <svg class="w-[19px] h-[19px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 1v4a1 1 0 0 1-1 1H1m4 4 1 6 2-4 2 4 1-6m4-8v16a.97.97 0 0 1-.933 1H1.933A.97.97 0 0 1 1 18V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2Z"/>
                    </svg>
                </template>
                Export as Word
            </list-group-item>
            <list-group-item>
                <template #prefix>
                    <svg class="w-[19px] h-[19px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="14" fill="none" viewBox="0 0 20 14">
                    <path stroke="currentColor" stroke-width="2" d="M1 5h18M1 9h18m-9-4v8m-8 0h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1Z"/>
                </svg>
                </template>
                Export as Excel
            </list-group-item>
        </list-group>
    </dropdown>
    <div class="grid grid-cols-3 gap-4 mb-4">
        <div>            
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-4 py-2">
                            #
                        </th>
                        <th scope="col" class="px-4 py-2">
                            Status
                        </th>
                        <th scope="col" class="px-4 py-2">
                            Month
                        </th>
                        <th scope="col" class="px-4 py-2">
                            Sales
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in data" :key="index" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ index+1 }}</th>
                        <td class="px-4 py-2"><input v-model="item.status" type="checkbox"> </td>
                        <td class="px-4 py-2">{{ item.month }}</td>
                        <td class="px-4 py-2">${{ item.sales }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="col-span-2 flex items-center justify-center h-96 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <Bar class="w-full" :data="barChartData" :options="chartOptions" />
        </div>
    </div>
</template> 