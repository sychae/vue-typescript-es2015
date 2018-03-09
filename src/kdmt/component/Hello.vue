<template>
  <div>
    <img src="@/assets/logo.png">
    <div class="greeting">Hello a b World {{name}}{{exclamationMarks}}</div>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class HelloComponent extends Vue {
  // data
  @Prop() private name!: string;
  @Prop() private initialEnthusiasm!: number;
  private enthusiasm: number = this.initialEnthusiasm;
  // computed
  get exclamationMarks(): string {
    return Array(this.enthusiasm + 1).join('!');
  }
  // methods
  private increment(): void {
    this.enthusiasm++;
  }
  private decrement(): void {
    if (this.enthusiasm > 1) {
      this.enthusiasm--;
    }
  }
}
</script>
<style>
.greeting {
    font-size: 20px;
}
</style>