<template>
    <div>
        <b-row class="bg-secondary p-3">
            <b-col id="loan-application" cols="11" md="8" class="offset-md-2 text-center text-bw">
                Anna Maria Tamm Rodriguez Espinosa
            </b-col>
            <b-col cols="1" md="2" class="text-right">
                <b-button style="width: 31px; height: 31px; padding: 0" class="rounded-circle edit-client" @click="pepstore.showClientForm">
                    <img width="12" src="../../assets/icons/pencil.png" />
                </b-button>
            </b-col>
        </b-row>
        <b-row class="small text-bw py-3">
            <b-col class="d-flex justify-content-center" id="user-info">
                <div class="text-right mx-3 d-flex align-items-center">
                <img src="../../assets/icons/user.png" class="mx-1" /> {{ pepstore.clientID }}
                </div>
                <div class="text-center mx-3 d-flex align-items-center">
                <img src="../../assets/icons/phone.png" class="mx-1" />{{ pepstore.finalClientPhone }}
                </div>
                <div class="text-left mx-3 d-flex align-items-center">
                <img src="../../assets/icons/mail.png" class="mx-1" />{{ pepstore.finalClientEmail }}
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { usePEPStore } from '@/stores/PEPStore';

export default {
  name: "ClientDataInfo",
  data() {
    return {
        pepstore: usePEPStore()
    }
  }
};
</script>