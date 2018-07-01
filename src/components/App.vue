<template>
  <span>{{message}}</span>
</template>

<script lang="ts">
import Vue from 'vue'
import Components from 'vue-class-component'
@Components
export default class App extends Vue {
  message: string = 'Hello World!!'
}
</script>
