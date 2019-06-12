<template>
  <footer class="footer" v-once>Copyright &copy; {{getYear}} Gerapy All Rights Reserved</footer>
</template>
<script type="text/javascript">
export default {
  computed: {
    getYear() {
      return new Date().getFullYear();
    }
  }
};
</script>
<style>
.footer {
  border-bottom: 1px solid #eff0f4;
}
</style>
