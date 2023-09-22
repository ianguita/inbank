<template>
    <b-container>
        <b-row v-if="pepstore.showError" class="mt-5">
            <span class="mx-auto">There are fields that need to be filled</span>
        </b-row>
        <b-row v-if="pepstore.showData" class="mt-5">
            <b-col class="text-center">
                <h4>Collected Data:</h4>
                <div id="final-loan">
                    <span>Amount: {{ pepstore.finalAmount }}<br>
                    Duration: {{ pepstore.finalDuration }}<br>
                    Monthly Payment: {{ pepstore.finalPayment }}</span>
                </div>
                <div id="final-client-data" class="mt-4">
                    <span>ID: {{ pepstore.clientID }}<br>
                    Phone: {{ pepstore.finalClientPhone }}<br>
                    Email: {{ pepstore.finalClientEmail }}</span>
                </div>
                <div v-if="pepstore.manualAddress" class="mt-4">
                    <span>Country: {{ pepstore.country }}<br>
                    County: {{ pepstore.county }}<br>
                    City/Parish: {{ pepstore.city }}<br>
                    Village/Township: {{ pepstore.village }}<br>
                    Street: {{ pepstore.street }}<br>
                    House: {{ pepstore.house }}<br>
                    Apartment: {{ pepstore.apartment }}<br>
                    Postal Code: {{ pepstore.postalCode }}</span>
                </div>
                <div v-if="!pepstore.familyMember" class="mt-4">
                    <span>Relationship to the PEP: {{ pepstore.relationship }}<br>
                    PEP Region: {{ pepstore.region }}<br>
                    PEP Position: {{ pepstore.position }}<br>
                    Duration as PEP or related to PEP: {{ pepstore.duration }}</span>
                </div>
                <div v-if="pepstore.ultimateBeneficiary" class="mt-4">
                    <span>First Name: {{ pepstore.beneficiaryFirstName }}<br>
                    Last Name: {{ pepstore.beneficiaryLastName }}<br>
                    Personal ID code: {{ pepstore.beneficiaryIdCode }}<br>
                    Residency: {{ pepstore.beneficiaryResidency }}<br>
                    Birth Place: {{ pepstore.beneficiaryBirthPlace }}<br>
                    Birth Date: {{ pepstore.beneficiaryBirthDate }}</span>
                </div>
                <div v-if="!pepstore.familyMember && pepstore.ownerNotPEP" class="mt-4">
                    <span>Relationship to the PEP: {{ pepstore.ownerRelationship }}<br>
                    PEP Region: {{ pepstore.ownerRegion }}<br>
                    PEP Position: {{ pepstore.ownerPosition }}<br>
                    Duration as PEP or related to PEP: {{ pepstore.ownerDuration }}</span>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import { usePEPStore } from '@/stores/PEPStore';

export default {
  name: 'FinalData',
  data() {
    return {
        pepstore: usePEPStore()
    }
  }
}
</script>