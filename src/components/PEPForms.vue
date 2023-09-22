<template>
    <b-container>
      <b-row>
        <b-col class="text-center">
          <p class="text-divider"><span><i>Or</i></span></p>
          <b-form-checkbox v-model="pepstore.manualAddress" name="check-button" switch class="text-bw small">
            Add address manually
          </b-form-checkbox>
          <hr class="text-divider">
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" md="8" class="offset-md-2 px-5">
          <div class="d-flex justify-content-between align-items-center my-3">
            <b-form-checkbox v-model="pepstore.familyMember">Neither I nor my family member is PEP</b-form-checkbox>
            <img v-b-modal.modal-1 src="../assets/icons/info.png" width="16" height="16">
          </div>
        </b-col>
      </b-row>
      <b-row>
        <transition name="fade">
          <PEPMemberForm v-if="!pepstore.familyMember" />
        </transition>
      </b-row>
      <b-row>
        <b-col cols="12" md="8" class="offset-md-2 px-5">
          <div class="d-flex justify-content-between align-items-center my-3">
            <b-form-checkbox v-model="pepstore.ultimateBeneficiary">I'm the ultimate beneficiary</b-form-checkbox>
            <img v-b-modal.modal-1 src="../assets/icons/info.png" width="16" height="16">
          </div>
        </b-col>
      </b-row>
      <b-row>
        <transition name="fade">
          <UltimateBeneficiaryForm v-if="pepstore.ultimateBeneficiary" />
        </transition>
      </b-row>
      <b-row>
        <transition name="fade">
          <b-col cols="12" md="8" class="offset-md-2 px-5" v-if="!pepstore.familyMember">
            <div class="d-flex justify-content-between align-items-center my-3">
              <b-form-checkbox v-model="pepstore.ownerNotPEP">The beneficial owner is not a PEP</b-form-checkbox>
            </div>
          </b-col>
        </transition>
      </b-row>
      <b-row>
        <transition name="fade">
          <PEPOwnerForm v-if="pepstore.ownerNotPEP && !pepstore.familyMember" />
        </transition>
      </b-row>
      <b-row>
        <b-col cols="12" md="8" class="offset-md-2 px-5">
          <b-button class="continue mt-4" @click="pepstore.checkForms()">Continue</b-button>
        </b-col>
      </b-row>
      <ModalItem />
    </b-container>
</template>

<script>
import PEPMemberForm from './forms/PEPMemberForm.vue'
import PEPOwnerForm from './forms/PEPOwnerForm.vue'
import UltimateBeneficiaryForm from './forms/UltimateBeneficiaryForm.vue';
import ModalItem from './ModalItem.vue'
import { usePEPStore } from '@/stores/PEPStore'

export default {
  name: "PEPForms",
  components: {
    PEPMemberForm,
    ModalItem,
    UltimateBeneficiaryForm,
    PEPOwnerForm
},
  data() {
    return {
      pepstore: usePEPStore()
    }
  }
};
</script>