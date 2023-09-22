import { defineStore } from "pinia";
import LoanInfo from '../components/loanForms/LoanInfo.vue';
import LoanForm from '../components/loanForms/LoanForm.vue';
import ClientDataForm from '../components/clientDataForms/ClientDataForm.vue';
import ClientDataInfo from '../components/clientDataForms/ClientDataInfo.vue';

export const usePEPStore = defineStore("pepinfo", {
  state() {
    return {
      amount: 2700,
      loanDuration: 36,
      monthlyPayment: 0,
      finalAmount: 2700,
      finalDuration: 36,
      finalPayment: 75,
      clientID: '38912052254',
      clientPhone: '+372 5289 6572',
      clientEmail: 'anna.tamm@gmail.com',
      finalClientPhone: '+372 5289 6572',
      finalClientEmail: 'anna.tamm@gmail.com',
      country: 'Estonia',
      city: null,
      street: '',
      county: null,
      village: null,
      house: '',
      apartment: '',
      postalCode: '',
      manualAddress: false,
      familyMember: true,
      relationship: null,
      position: null,
      region: null,
      duration: null,
      ultimateBeneficiary: false,
      ownerNotPEP: false,
      ownerRelationship: null,
      ownerPosition: null,
      ownerRegion: null,
      ownerDuration: null,
      beneficiaryFirstName: '',
      beneficiaryLastName: '',
      beneficiaryIdCode: '',
      beneficiaryResidency: null,
      beneficiaryBirthPlace: '',
      beneficiaryBirthDate: '',
      outOfRange: false,
      incorrectPhone: false,
      activeComponent: LoanInfo,
      activeClientData: ClientDataInfo,
      showData: false,
      showError: false,
      cities: ['Tallinn', 'Tartu', 'Narva', 'Pärnu'],
      counties: ['Harju', 'Hiiu', 'Ida-Viru', 'Jõgeva', 'Järva', 'Lääne', 'Lääne-Viru', 'Põlva', 'Pärnu', 'Rapla', 'Saare', 'Tartu', 'Valga', 'Viljandi', 'Võru'],
      villages: ['Tallinn', 'Tammispea', 'Paldiski', 'Maardu', 'Saue', 'Loksa', 'Jõelähtme', 'Anija', 'Keila'],
      relationships: ['Parent', 'Child', 'Partner', 'Sibling', 'Uncle/Aunt', 'Indirect family member'],
      positions: ['Head of state', 'Member of parliament', 'Member of courts', 'Ambassador', 'Manager of state-owner enterprise', 'Member of supreme court'],
      regions: ['Harju', 'Hiiu', 'Ida-Viru', 'Jõgeva', 'Järva', 'Lääne', 'Lääne-Viru', 'Põlva', 'Pärnu', 'Rapla', 'Saare', 'Tartu', 'Valga', 'Viljandi', 'Võru'],
      durations: ['Less than a year', 'From 1 to 5 years', 'More than 5 years'],
      residencies: ['Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Italy', 'Latvia', 'Lithuania', 'Netherlands', 'Poland', 'Romania', 'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'Ukraine', 'United Kingdom']
    };
  },
  actions: {
    setPersonalInfoNull() {
      this.country = 'Estonia',
      this.city = null,
      this.street = '',
      this.county = null,
      this.village = null,
      this.house = '',
      this.apartment = '',
      this.postalCode = ''
    },
    setFamilyMemberNull() {
      this.relationship = null,
      this.position = null,
      this.region = null,
      this.duration = null
    },
    setUltimateBeneficiaryNull() {
      this.beneficiaryFirstName = '',
      this.beneficiaryLastName = '',
      this.beneficiaryIdCode = '',
      this.beneficiaryResidency = null,
      this.beneficiaryBirthPlace = '',
      this.beneficiaryBirthDate = ''
    },
    setBeneficialOwnerNull() {
      this.ownerRelationship = null,
      this.ownerPosition = null,
      this.ownerRegion = null,
      this.ownerDuration = null
    },
    setNull() {
      if(!this.manualAddress) {
        this.setPersonalInfoNull();
      }
      if(this.familyMember) {
        this.setFamilyMemberNull();
      }
      if(!this.ultimateBeneficiary) {
        this.setUltimateBeneficiaryNull();
      }
      if(!this.ownerNotPEP) {
        this.setBeneficialOwnerNull();
      }
    },
    calculateMonthlyPayment() {
      if(this.amount < 200) {
        this.amount = 200;
        this.outOfRange = true;
      } else if (this.amount > 10000) {
        this.amount = 10000;
        this.outOfRange = true;
      }
      this.monthlyPayment = Math.round(((this.amount/this.loanDuration) + Number.EPSILON) * 100) / 100;
    },
    setAmount(amount){
      this.amount = amount;
    },
    setLoanInfo() {
      this.finalAmount = this.amount;
      this.finalDuration = this.loanDuration;
      this.finalPayment = this.monthlyPayment;
      this.hideForm();
    },
    hideForm() {
      this.activeComponent = LoanInfo;
    },
    showForm() {
      this.activeComponent = LoanForm;
    },
    setClientInfo() {
      if(!this.incorrectPhone){
        this.finalClientPhone = this.clientPhone;
        this.finalClientEmail = this.clientEmail;
        this.hideClientForm();
      }
    },
    hideClientForm() {
      this.activeClientData = ClientDataInfo;
    },
    showClientForm() {
      this.activeClientData = ClientDataForm;
    },
    validatePhone() {
      if(!/\+372\s\d\d\d\d\s\d\d\d\d/i.test(this.clientPhone)) {
        this.incorrectPhone = true;
      } else {
        this.incorrectPhone = false;
      }
    },
    checkForms() {
      let errors = 0;
      if(this.manualAddress) {
        if(this.city == null || this.street == '' || this.county == null || this.village == null || this.house == '' || this.apartment == '' || this.postalCode == '') {
          errors++;
        }
      }
      if(!this.familyMember) {
        if(this.relationship == null || this.position == null || this.region == null || this.duration == null){
          errors++;
        }
      }
      if(this.ultimateBeneficiary) {
        if(this.beneficiaryFirstName == '' || this.beneficiaryLastName == '' || this.beneficiaryIdCode == '' || this.beneficiaryResidency == null || this.beneficiaryBirthPlace == '' || this.beneficiaryBirthDate == '') {
          errors++;
        }
      }
      if(this.ownerNotPEP) {
        if(this.ownerRelationship == null || this.ownerPosition == null || this.ownerRegion == null || this.ownerDuration == null) {
          errors++;
        }
      }
      if (errors == 0) {
        this.setNull();
        this.showError = false;
        this.showData = true;
      } else {
        this.showData = false;
        this.showError = true;
      }
    }
  },
});
