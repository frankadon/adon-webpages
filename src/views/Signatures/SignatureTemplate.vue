<template>
<table style='width: 760px; height: auto; font-family: sans-serif; background: url(https://i.postimg.cc/T114xfKp/bg-gradiant.png); background-repeat: no-repeat; padding: 10px; background-size: cover; color: #fff; border-radius: 10px; margin: 0;'>
    <tbody>
    <tr>
        <td>
        <img style='width: 180px; height: auto; padding: -10px;' src='https://adondevelopment.com/clients/2021_sig_directory/images/AOG-logo_white.png' alt='AdOn logo'>
        </td>
        <td style='padding-top: 10px;'>
            <strong style='font-size: 16px;'>
                {{ sigdata2.name }}<br>
                <small>{{ sigdata2.position }}</small>
            </strong>
            <p style='font-size: 12px;'>
                <a v-if="sigdata2.phoneOnly" href='`tel:${sigdata2.phoneNumber}`' target='_blank' style='text-decoration: none; color: #fff; align-items: center;'>
                    <span>
                        <img style='width: 12px; align-items: center;' src='https://adondevelopment.com/clients/2021_sig_directory/images/icon-01.png' alt='phone'>
                    </span> {{ sigdata2.phoneNumber }}
                </a>
                <br v-if="sigdata2.phoneOnly">
                <a v-if="sigdata2.mobileOnly" href='tel:' target='_blank' style='text-decoration: none; color: #fff; align-items: center;'>
                    <span>
                        <img style='width: 12px; align-items: center;' src='https://adondevelopment.com/clients/2021_sig_directory/images/icon-mobile-01.png' alt='mobile'>
                    </span> {{ sigdata2.mobileNumber }}
                </a>
                <br v-if="sigdata2.mobileOnly">
                <a href='https://www.adongroup.com.au' target='_blank' style='text-decoration: none; color: #fff; align-items: center;'>
                    <span>
                        <img style='width: 12px; align-items: center;' src='https://adondevelopment.com/clients/2021_sig_directory/images/icon-02.png' alt='internet'>
                    </span> www.adongroup.com.au
                </a>
            </p>
        </td>
        <td>
        <img style='width: 300px; height: auto; float: right;' src='https://adondevelopment.com/clients/2021_sig_directory/images/AdOn-logo-and-partners-higher-res-updated-v2.gif' alt='Partner'>
        </td>
    </tr>
    <tr>
        <td colspan='3'>
        <p style='line-height: 1.2; font-size: 8px; padding-left: 15px; padding-right: 15px;'>
            This email, its contents and any attachments are strictly confidential. They must not be used, distributed, copied or read by any person other than the addressee. Unauthorised use, disclosure, copying or reliance on the contents of and attachments to this email by anyone other than the addressee may be unlawful. If you have received this email and attachments in error please contact us at Ad on Group immediately to facilitate its return.
        </p>
        </td>
    </tr>
    </tbody>
</table>
</template>

<script>
export default {
    props: [
        'sigdata2'
    ]
}
</script>

<style scoped>

</style>