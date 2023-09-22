<template>
    <b-row id="client-form" class="d-flex align-items-center p-3 bg-secondary" v-click-outside="pepstore.hideClientForm">
        <b-col cols="12" md="3" class="text-center">
            <div id="client-form-label" class="d-flex flex-column align-items-end">
                <span class="small font-weight-light">Change your contact info</span>
                <transition name="fade">
                    <span v-if="pepstore.incorrectPhone" class="tiny error">Incorrect phone number</span>
                </transition>
            </div>
        </b-col>
        <b-col cols="12" md="6" id="client-form-inputs" class="d-flex justify-content-center pr-0 align-items-center">
            <div class="d-flex align-items-center mr-2">
                <img src="../../assets/icons/phoneDark.png" width="15px" class="mx-2">
                <b-form-input class="p-0 client-input small" v-model="pepstore.clientPhone" @change="pepstore.validatePhone"></b-form-input>
            </div>
            <div class="d-flex align-items-center ml-2">
                <img src="../../assets/icons/mailDark.png" width="15px" class="mx-2">
                <b-form-input class="p-0 client-input small" v-model="pepstore.clientEmail"></b-form-input>
            </div>
        </b-col>
        <b-col cols="12" md="3" id="client-form-button" class="d-flex justify-content-end">
            <div id="client-save-button" @click="pepstore.setClientInfo">
                <img src="../../assets/icons/rightArrowLight.png" />
            </div>
        </b-col>
    </b-row>
</template>
  
<script>
import { usePEPStore } from '@/stores/PEPStore';

export default {
    name: 'ClientDataForm',
    data() {
        return {
            pepstore: usePEPStore()
        }
    }
}
</script>