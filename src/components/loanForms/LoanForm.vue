<template>
    <b-row class="text-light d-flex align-items-center" v-click-outside="pepstore.hideForm">
        <b-col id="loan-form" cols="10" md="11" class="d-flex justify-content-center pr-0 align-items-center">
            <div class="d-flex align-items-center input-dropdown">
                <div class="d-flex flex-column align-items-end">
                    <span class="small font-weight-light">Amount</span>
                    <transition name="fade">
                        <span v-if="minMaxMessage" class="tiny">200 - 10000 €</span>
                    </transition>
                    <transition name="fade">
                        <span v-if="pepstore.outOfRange" class="tiny error">Out of range</span>
                    </transition>
                </div>
                <b-input-group class="ml-2">
                    <b-form-input class="text-right p-0" id="amountInput" v-model="pepstore.amount" @change="pepstore.calculateMonthlyPayment()" @focus="minMaxMessage = true; pepstore.outOfRange = false" @blur="minMaxMessage = false"></b-form-input>
                    <b-input-group-text class="p-0 bg-primary border-0 text-light"><span class="small font-weight-light"><sup>€</sup></span></b-input-group-text>
                </b-input-group>
                <div @click="amountDropdown = !amountDropdown">
                    <img src="../../assets/icons/dropdown-light.png" width="8px" height="4px" class="ml-2">
                </div>
                <transition name="fade">
                    <AmountDropdown v-if="amountDropdown"></AmountDropdown>
                </transition>
            </div>
            <div class="d-flex input-dropdown mx-4">
                <span class="small font-weight-light">Duration</span>
                <b-input-group class="ml-2">
                    <b-form-input class="text-right p-0 ml-2" v-model="pepstore.loanDuration" @change="pepstore.calculateMonthlyPayment()"></b-form-input>
                    <b-input-group-text class="p-0 bg-primary border-0 text-light"><span class="small font-weight-light">months</span></b-input-group-text>
                </b-input-group>
                <div @click="durationDropdown = !durationDropdown">
                    <img src="../../assets/icons/dropdown-light.png" width="8px" height="4px" class="ml-2">
                </div>
                <transition name="fade">
                    <DurationDropdown v-if="durationDropdown"></DurationDropdown>
                </transition>
            </div>
            <div id="monthlyPayment" class="rounded rounded-pill py-2 px-4"><span class="small light">Monthly Payment</span> {{ pepstore.monthlyPayment }} <sup>€</sup></div>
        </b-col>
        <b-col cols="1" class="text-right pr-5">
            <div id="loan-button" @click="pepstore.setLoanInfo">
                <img src="../../assets/icons/rightArrowDark.png" />
            </div>
        </b-col>
    </b-row>
</template>
  
<script>
import { usePEPStore } from '@/stores/PEPStore';
import AmountDropdown from './AmountDropdown.vue';
import DurationDropdown from './DurationDropdown.vue';

export default {
    name: 'LoanForm',
    components: {
        AmountDropdown,
        DurationDropdown
    },
    data() {
        return {
            pepstore: usePEPStore(),
            amountDropdown: false,
            durationDropdown: false,
            minMaxMessage: false,
        }
    },
    beforeMount() {
        this.pepstore.calculateMonthlyPayment()
    }
}
</script>