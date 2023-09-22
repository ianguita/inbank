<template>
    <div class="amount-dropdown">
        <ul @click="pepstore.calculateMonthlyPayment">
            <li class="py-1" @click="pepstore.setAmount(200)">
                <div class="minMax small light d-flex justify-content-between align-items-baseline">
                    <span>200 €</span>
                    <span class="tiny">Min. allowed</span>
                </div>
            </li>
            <li v-for="amount in amounts" :key="amount" class="py-1" @click="pepstore.setAmount(amount)">
                <span class="small light">{{ amount }} €</span>
            </li>
            <li class="py-1"  @click="pepstore.setAmount(10000)">
                <div class="minMax small light d-flex justify-content-between align-items-baseline">
                    <span>10000 €</span>
                    <span class="tiny">Max. allowed</span>
                </div>
            </li>
        </ul>
    </div>
</template>
  
<script>
import { usePEPStore } from '@/stores/PEPStore';

export default {
    name: 'AmountDropdown',
    data() {
        return {
            pepstore: usePEPStore(),
            amounts: [250, 300, 350, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500, 8000, 8500, 9000, 9500]
        }
    }
}
</script>