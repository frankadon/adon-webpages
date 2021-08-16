<template>
<table class="table table-hover table-sm">
    <thead>
        <tr>
            <th>Name</th>
            <th>
                Position
            </th>
            <th v-if="sigdata3.phoneOnly">
                Phone Number
            </th>
            <th v-if="sigdata3.mobileOnly">
                Mobile Number
            </th>
            <th>
                View Signature
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>{{ sigdata3.name }}</td>
            <td>
                {{ sigdata3.position }}
            </td>
            <td v-if="sigdata3.phoneOnly">{{ sigdata3.phoneNumber }}</td>
            <td v-if="sigdata3.mobileOnly">{{ sigdata3.mobileNumber }}</td>
            <td>
                <router-link target="_blank" :to="{name: 'signatureView', params: { name:sigdata3.name, position:sigdata3.position, phoneNumber:sigdata3.phoneNumber, mobileNumber:sigdata3.mobileNumber, phoneOnly:sigdata3.phoneOnly, mobileOnly:sigdata3.mobileOnly }}">
                    <p v-if="sigdata3.isShow"><button class="btn btn-outline-info btn-sm">View</button></p>
                </router-link>
            </td>
        </tr>
    </tbody>
</table>
</template>

<script>
export default {
    props: [
        'sigdata3'
    ]
}
</script>

<style>

</style>