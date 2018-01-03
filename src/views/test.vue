<template>
  <div @click="handleFormatError">11111</div>
</template>

<script>
  export default {
    methods: {
      handleFormatError (file) {
        this.$Notice({aaa:'1222'});
     },
    }
  }
</script>