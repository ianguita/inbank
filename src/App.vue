<template>
  <div id="app" class="pb-5">
    <NavBar />
    <LoanApplication />
    <ClientData />
    <PersonalInformation />
    <PEPForms />
    <FinalData />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import LoanApplication from './components/LoanApplication.vue';
import ClientData from './components/ClientData.vue';
import PersonalInformation from './components/PersonalInformation.vue';
import PEPForms from './components/PEPForms.vue';
import FinalData from './components/FinalData.vue';

export default {
  name: "App",
  components: {
    NavBar,
    LoanApplication,
    ClientData,
    PersonalInformation,
    PEPForms,
    FinalData
  }
};
</script>
