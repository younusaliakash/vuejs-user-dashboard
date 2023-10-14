<script setup>
import {ref, reactive, computed, watch } from 'vue';

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

const chartData = ref([]);

watch(filteredData, (newVal, oldVal) =>{
    chartData.value = newVal.map(item => ({
        label:item.month,
        value:item.sales
    }));
}, {deep: true, immediate: true});

// Create a JSON object to store the chart configurations
const chartConfigs = computed(() => {
    return {
        type: "column2d",
        width: "700",
        height: "400",
        dataFormat: "json",
        dataSource: {
            chart: {
                caption: "Monthly Sales Report for the Year [2022]",
                subCaption: "Monthly Sales Report",
                xAxisName: "Months",
                yAxisName: "Sales in Taka",
                numberSuffix: "",
                numberPrefix: "",
                exportEnabled:"1",
                theme: "fusion"
            },
            data: chartData.value,
        }
    };
});

</script>

<template>
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
            <fusioncharts
            :type="chartConfigs.type"
            :width="chartConfigs.width"
            :height="chartConfigs.height"
            :dataformat="chartConfigs.dataFormat"
            :dataSource="chartConfigs.dataSource"
            />
        </div>
    </div>
</template> 