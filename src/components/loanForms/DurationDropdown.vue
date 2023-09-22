<template>
    <div class="duration-dropdown">
        <ul @click="pepstore.calculateMonthlyPayment">
            <li class="py-1" @click="pepstore.loanDuration = 6">
                <div class="minMax small light d-flex justify-content-between align-items-baseline">
                    <span>6 months</span>
                    <span class="tiny">Min. allowed</span>
                </div>
            </li>
            <li v-for="amount in amounts" :key="amount" class="py-1" @click="pepstore.loanDuration = amount">
                <span class="small light">{{ amount }} months</span>
            </li>
            <li class="py-1"  @click="pepstore.loanDuration = 36">
                <div class="minMax small light d-flex justify-content-between align-items-baseline">
                    <span>36 months</span>
                    <span class="tiny">Max. allowed</span>
                </div>
            </li>
        </ul>
    </div>
</template>
  
<script>
import { usePEPStore } from '@/stores/PEPStore';

export default {
    name: 'DurationDropdown',
    data() {
        return {
            pepstore: usePEPStore(),
            amounts: [7, 8, 9, 10, 11, 12, 14, 16, 18, 20, 24, 30]
        }
    }
}
</script>