<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    default: null,
  },
  txtColor: {
    type: String,
    default: null,
  },
  customColor: {
    type: String,
    default: null,
  },
})
const customColor = {
  backgroundColor: `${
    props.customColor ? `${props.customColor} !important` : null
  }`,
}
</script>
<template>
  <q-btn :color="props.txtColor" :style="customColor"></q-btn>
</template>
