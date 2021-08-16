<template>
    <div class="row">
        <div class="col-sm-4">
            <div class="card card-body">
                <strong class="card-title">AdOn Signature Form</strong>
                <hr>
                <div class="form-floating mb-2">
                    <select class="form-select" id="signature-type" aria-label="Floating label select example" @change="sigType">
                        <option value="Phone Number">Phone Number</option>
                        <option value="Mobile Number">Mobile Number</option>
                        <option value="Phone and Mobile Number">Phone and Mobile Number</option>
                    </select>
                    <label for="floatingSelect">Signature type</label>
                </div>
                <div class="form-floating mb-2">
                    <input v-model="signatureData.name" type="text" class="form-control" id="name" :placeholder="signatureData.name">
                    <label for="name">Name</label>
                </div>
                <div class="form-floating mb-2">
                    <input v-model="signatureData.position" type="text" class="form-control" id="position" :placeholder="signatureData.position">
                    <label for="position">Position</label>
                </div>
                <div v-if="signatureData.phoneOnly" class="form-floating mb-2">
                    <input v-model="signatureData.phoneNumber" type="text" class="form-control" id="phone-number" :placeholder="signatureData.phoneNumber">
                    <label for="phone-number">Phone Number</label>
                </div>
                <div v-if="signatureData.mobileOnly" class="form-floating mb-2">
                    <input v-model="signatureData.mobileNumber" type="text" class="form-control" id="mobile-number" :placeholder="signatureData.mobileNumber">
                    <label for="mobile-number">Mobile Number</label>
                </div>
                
                <button class="btn btn-outline-primary mb-2 btn-sm" @click="generateSignature">Generate Signature</button>
                <!-- <button class="btn btn-outline-danger btn-sm">Clear</button> -->
            </div>
        </div>
        <div class="col-sm-8">
            <div id="sig-container">
                <EmailSignatureComp :sigdata="signatureData" />
            </div>
        </div>
    </div>
</template>
<script>
import EmailSignatureComp from './EmailSignatureComp'
export default {
  name: 'AdOn Email Signature',
  data () {
      return {
          signatureData: {
            name: 'Juan Dela Cruz',
            position: 'Web Developer',
            phoneNumber: '07 2556 2545',
            mobileNumber: '0566 555 222',
            formType: '',
            phoneOnly: true,
            mobileOnly: false,
            isShow: false
          }
      }
  },
  components: {
      EmailSignatureComp,
  },
  mounted() {
      const signatureType = document.querySelector('#signature-type')
      this.signatureData.formType = signatureType
  },
  methods: {
      sigType(){
          if(this.signatureData.formType.value === "Mobile Number"){
              this.signatureData.mobileOnly = true;
              this.signatureData.phoneOnly = false;
          } else if(this.signatureData.formType.value === "Phone and Mobile Number") {
              this.signatureData.phoneOnly = true;
              this.signatureData.mobileOnly = true;
          } else {
              this.signatureData.phoneOnly = true;
              this.signatureData.mobileOnly = false;
          }
      },
      generateSignature(){
        if(this.signatureData.formType.value === "Mobile Number"){
            const name = document.querySelector('#name').value;
            this.signatureData.name = name
            const position = document.querySelector('#position').value;
            this.signatureData.position = position
            const mobile = document.querySelector('#mobile-number').value;
            this.signatureData.mobileNumber = mobile
            this.signatureData.isShow = true
        } else if(this.signatureData.formType.value === "Phone and Mobile Number"){
            const name = document.querySelector('#name').value;
            this.signatureData.name = name
            const position = document.querySelector('#position').value;
            this.signatureData.position = position
            const phone = document.querySelector('#phone-number').value;
            this.signatureData.phoneNumber = phone
            const mobile = document.querySelector('#mobile-number').value;
            this.signatureData.mobileNumber = mobile
            this.signatureData.isShow = true
        } else{
            const name = document.querySelector('#name').value;
            this.signatureData.name = name
            const position = document.querySelector('#position').value;
            this.signatureData.position = position
            const phone = document.querySelector('#phone-number').value;
            this.signatureData.phoneNumber = phone
            this.signatureData.isShow = true
        }
      }
  }
}
</script>
<style scoped>

</style>