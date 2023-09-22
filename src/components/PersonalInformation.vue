<template>
    <b-container>
      <p>Personal information</p>
      <b-form>
        <b-row>
          <b-col cols="12" md="6" class="px-2">
            <b-form-input required disabled v-model="pepStore.country" class="my-2 form-control" :class="{ 'hasValue': pepStore.country}"></b-form-input>
            <label>Country</label>
          </b-col>
          <b-col cols="12" md="6" class="px-2">
            <b-form-select required v-model="pepStore.county" :options="pepStore.counties" class="my-2 form-control" :class="{ 'hasValue': pepStore.county,  'needs-value': pepStore.manualAddress && pepStore.county == null }" :disabled="!pepStore.manualAddress"></b-form-select>
            <label>County</label>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" md="6" class="px-2">
            <b-form-select required v-model="pepStore.city" :options="pepStore.cities" class="my-2 form-control" :class="{ 'hasValue': pepStore.city,  'needs-value': pepStore.manualAddress && pepStore.city == null }" :disabled="!pepStore.manualAddress"></b-form-select>
            <label>City / Parish</label>
          </b-col>
          <b-col cols="12" md="6" class="px-2">
            <b-form-select required v-model="pepStore.village" :options="pepStore.villages" class="my-2 form-control" :class="{ 'hasValue': pepStore.village,  'needs-value': pepStore.manualAddress && pepStore.village == null }" :disabled="!pepStore.manualAddress"></b-form-select>
            <label>Village / Township</label>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" md="6" class="px-2">
            <b-form-input required v-model="pepStore.street" class="my-2 form-control" :class="{ 'hasValue': pepStore.street,  'needs-value': pepStore.manualAddress && pepStore.street == '' }" :disabled="!pepStore.manualAddress"></b-form-input>
            <label>Street</label>
          </b-col>
          <b-col cols="12" md="6" class="px-2">
            <div class="d-flex my-2">
              <b-col class="p-0 mr-2">
                <b-form-input required v-model="pepStore.house" class="form-control" :class="{ 'hasValue': pepStore.house,  'needs-value': pepStore.manualAddress && pepStore.house == '' }" :disabled="!pepStore.manualAddress"></b-form-input>
                <label class="small-input">House</label>
              </b-col>
              <b-col class="p-0 mx-2">
                <b-form-input required v-model="pepStore.apartment" class="form-control"  :class="{ 'hasValue': pepStore.apartment,  'needs-value': pepStore.manualAddress && pepStore.apartment == '' }" :disabled="!pepStore.manualAddress"></b-form-input>
                <label class="small-input">Apartment</label>
              </b-col>
              <b-col class="p-0 ml-2">
                <b-form-input required v-model="pepStore.postalCode" class="form-control" :class="{ 'hasValue': pepStore.postalCode,  'needs-value': pepStore.manualAddress && pepStore.postalCode == '' }" :disabled="!pepStore.manualAddress"></b-form-input>
                <label class="small-input">Postal Code</label>
              </b-col>
          </div>
          </b-col>
        </b-row>
      </b-form>
    </b-container>
</template>

<script>
import {usePEPStore} from '../stores/PEPStore'

export default {
  name: "PersonalInformation",
  data() {
    return {
      pepStore: usePEPStore()
    }
  }
};
</script>