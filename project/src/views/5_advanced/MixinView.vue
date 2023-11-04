<template>
    <div></div>
</template>
<script>
import Formatter from '@/mixins/formatter'
// import Axios from '@/mixins/axios'
export default {
    components: {},
    mixins:[Formatter],
    data() {
        return {
            sampleData: ''
        }
    },
    setup() {},
    created() {
        console.log('mixin의 created')
    },
    mounted() {
        console.log('mixin의 mounted')
        console.log(this.$convertDateFormat('20231028','YYYY-MM-DD'))
        console.log(this.$convertNumberFormat(2547500,'#,###'))

        this.getCustomers();
    },
    unmounted() {},
    methods: {
        async getCustomers(){
            const customers = await this.$get('http://localhost:3000/customers')
            console.log(customers);
        }
    }
}
</script>