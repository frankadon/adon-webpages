<template>
<div>
    <div class="card card-body mb-2">
        <strong>Signature Preview</strong>
        <hr>
        <SignatureTemplate :sigdata2="sigdata" />
    </div>
    <div class="card card-body">
        <strong>Generated Signature</strong>
        <hr>
        <GenerateSignature :sigdata3="sigdata" />
    </div>
</div>
    
</template>
<script>
import SignatureTemplate from './SignatureTemplate'
import GenerateSignature from './GeneratedSignature'
export default {
    props: [
        'sigdata'
    ],
    mounted() {
        console.log(this.sigdata)
    },
    components: {
        SignatureTemplate,
        GenerateSignature
    }
}
</script>
<style scoped>

</style>