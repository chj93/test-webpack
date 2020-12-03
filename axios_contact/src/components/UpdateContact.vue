<!--ContactForm를 참조-->
<!--연락처 한건의 정보를 props를 통해 재전달 함 -->
<template>
    <contactForm mode="update" :contact="contact" />
</template>

<script>
import ContactForm from './ContactForm.vue';

export default {
    name : "updateContact",
    components : { ContactForm },
    props : [ 'contact' ]
}
</script>

<style>

</style>
