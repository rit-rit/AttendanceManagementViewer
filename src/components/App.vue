<template>
  <div>
    <Menu></Menu>
    <br>
    <span>{{message}}</span>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Components from "vue-class-component";
import Menu from "src/components/Menu.vue";
@Components({
  components:{Menu}
})
export default class App extends Vue {
  message: string = "Here is App.vue!!";
}
</script>
