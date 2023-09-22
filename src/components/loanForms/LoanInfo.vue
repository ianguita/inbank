<template>
    <b-row @click="pepstore.showForm" id="loan-info">
        <b-col cols="2"><img src="../../assets/icons/leftArrow.png" /></b-col>
        <b-col id="loan-application" cols="8" class="text-center text-light d-flex flex-row justify-content-center">
        Your loan application <div class="ml-2"><span id="loan">{{ pepstore.finalAmount }}€ / {{ pepstore.finalDuration }}</span> <span id="months">months</span></div>
        </b-col>
    </b-row>
</template>
  
<script>
import { usePEPStore } from '@/stores/PEPStore';

export default {
    name: 'LoanInfo',
    data() {
        return {
            pepstore: usePEPStore()
        }
    }
}
</script>