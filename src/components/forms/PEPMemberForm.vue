<template>
    <b-container class="my-3">
      <b-form>
        <b-row>
          <b-col cols="12" md="6" class="px-2">
            <b-form-select v-model="pepStore.relationship" :options="pepStore.relationships" class="my-2 form-control" :class="{ 'hasValue': pepStore.relationship }"></b-form-select>
            <label>Relationship to the PEP</label>
          </b-col>
          <b-col cols="12" md="6" class="px-2">
            <b-form-select v-model="pepStore.region" :options="pepStore.regions" class="my-2 form-control" :class="{ 'hasValue': pepStore.region }"></b-form-select>
            <label>PEP Region</label>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" md="6" class="px-2">
            <b-form-select v-model="pepStore.position" :options="pepStore.positions" class="my-2 form-control" :class="{ 'hasValue': pepStore.position }"></b-form-select>
            <label>PEP Position</label>
          </b-col>
          <b-col cols="12" md="6" class="px-2">
            <b-form-select v-model="pepStore.duration" :options="pepStore.durations" class="my-2 form-control" :class="{ 'hasValue': pepStore.duration }"></b-form-select>
            <label>Duration as PEP or related to PEP</label>
          </b-col>
        </b-row>
      </b-form>
    </b-container>
</template>

<script>
import {usePEPStore} from '../../stores/PEPStore'

export default {
  name: "PEPMemberForm",
  data(){
    return {
      pepStore: usePEPStore(), 
    }
  }
};
</script>