<template>
  <b-container class="my-3">
    <b-form>
      <b-row>
        <b-col cols="12" md="6" class="px-2">
          <b-form-select v-model="pepStore.ownerRelationship" :options="pepStore.relationships" class="my-2 form-control" :class="{ 'hasValue': pepStore.ownerRelationship }"></b-form-select>
          <label>Relationship to the PEP</label>
        </b-col>
        <b-col cols="12" md="6" class="px-2">
          <b-form-select v-model="pepStore.ownerRegion" :options="pepStore.regions" class="my-2 form-control" :class="{ 'hasValue': pepStore.ownerRegion }"></b-form-select>
          <label>PEP Region</label>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" md="6" class="px-2">
          <b-form-select v-model="pepStore.ownerPosition" :options="pepStore.positions" class="my-2 form-control" :class="{ 'hasValue': pepStore.ownerPosition }"></b-form-select>
          <label>PEP Position</label>
        </b-col>
        <b-col cols="12" md="6" class="px-2">
          <b-form-select v-model="pepStore.ownerDuration" :options="pepStore.durations" class="my-2 form-control" :class="{ 'hasValue': pepStore.ownerDuration }"></b-form-select>
          <label>Duration as PEP or related to PEP</label>
        </b-col>
      </b-row>
    </b-form>
  </b-container>
</template>

<script>
import {usePEPStore} from '../../stores/PEPStore'

export default {
name: "PEPOwnerForm",
data(){
  return {
    pepStore: usePEPStore()
  }
}
};
</script>