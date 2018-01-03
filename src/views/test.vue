<template>
<div>
  <div @click="handleFormatError">11111</div>
  <div @click="handleFormatError2">11111</div>
  </div>
</template>

<script>
  export default {
    methods: {
      handleFormatError (file) {
        this.$Notice({aaa:'1222'});
     },
      handleFormatError2 (file) {
        this.$Notice({aaa:'1212121'});
     },
    }
  }
</script>