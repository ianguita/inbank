<template>
  <b-container class="bg-primary p-3 mt-5 rounded-pill loan-application">
    <transition name="fade" mode="out-in">
      <component :is="pepstore.activeComponent"></component>
    </transition>
  </b-container>
</template>
  
<script>
  import { usePEPStore } from '@/stores/PEPStore';

  export default {
    name: 'LoanApplication',
    data() {
      return {
        pepstore: usePEPStore(),
      }
    }
  }
</script>