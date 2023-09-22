<template>
  <b-container class="my-4 rounded-xl overflow-hidden" id="user-data">
    <transition name="fade" mode="out-in">
      <component :is="pepstore.activeClientData"></component>
    </transition>
  </b-container>
</template>

<script>
import { usePEPStore } from '@/stores/PEPStore';

export default {
  name: "ClientData",
  data() {
    return {
      pepstore: usePEPStore()
    }
  }
};
</script>
