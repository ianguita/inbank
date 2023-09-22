<template>
    <b-container class="my-3">
      <b-form>
        <b-row>
          <b-col cols="12" md="6" class="px-2">
            <b-form-input v-model="pepStore.beneficiaryFirstName" class="my-2 form-control" :class="{ 'hasValue': pepStore.beneficiaryFirstName }"></b-form-input>
            <label>First Name</label>
          </b-col>
          <b-col cols="12" md="6" class="px-2">
            <b-form-input v-model="pepStore.beneficiaryLastName" class="my-2 form-control" :class="{ 'hasValue': pepStore.beneficiaryLastName }"></b-form-input>
            <label>Last Name</label>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" md="6" class="px-2">
            <b-form-input v-model="pepStore.beneficiaryIdCode" class="my-2 form-control" :class="{ 'hasValue': pepStore.beneficiaryIdCode }"></b-form-input>
            <label>Personal ID code</label>
          </b-col>
          <b-col cols="12" md="6" class="px-2">
            <b-form-select v-model="pepStore.beneficiaryResidency" :options="pepStore.residencies" class="my-2 form-control" :class="{ 'hasValue': pepStore.beneficiaryResidency }"></b-form-select>
            <label>Residency</label>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" md="6" class="px-2">
            <b-form-input v-model="pepStore.beneficiaryBirthPlace" class="my-2 form-control" :class="{ 'hasValue': pepStore.beneficiaryBirthPlace }"></b-form-input>
            <label>Birth Place</label>
          </b-col>
          <b-col cols="12" md="6" class="px-2">
            <b-form-input v-model="pepStore.beneficiaryBirthDate" class="my-2 form-control" :class="{ 'hasValue': pepStore.beneficiaryBirthDate }"></b-form-input>
            <label>Birth Date</label>
          </b-col>
        </b-row>
      </b-form>
    </b-container>
</template>

<style scoped>

</style>

<script>
import {usePEPStore} from '../../stores/PEPStore'

export default {
  name: "UltimateBeneficiaryForm",
  data(){
    return {
      pepStore: usePEPStore(),
    }
  }
};
</script>