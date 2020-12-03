<!--ContactForm를 참조-->
<!--연락처 한건의 정보를  props를 통해 재전달 x -->
<template>
    <contactForm mode="add" />
</template>

<script>
import ContactForm from './ContactForm.vue';

export default {
    name : "addContact",
    components : { ContactForm }
}
</script>

<style scoped>
</style>
