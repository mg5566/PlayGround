<template>
  <div class="main-frame">
    <slot class="main-frame__header" name="header"></slot>
    <slot name="default"></slot>
    <slot class="main-frame__footer" name="footer"></slot>
  </div>
</template>

<style scoped lang="scss">
  .main-frame {
    height: 100vh;
    display: flex;
    flex-direction: column;

    &__header {
      background-color: cornflowerblue;
      height: 50px;
    }

    &__footer {
      background-color: darkgray;
      height: 50px;
    }
  }
</style>