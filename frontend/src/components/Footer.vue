<template>
  <footer>
    <div class="footer-content">
      <div class="footer-info">
        ⓒ 2020 Story, Inc. All Rights Reserved
      </div>
    </div>
  </footer>
</template>

<script>
export default {
name: "Footer"
}
</script>

<style scoped>
  footer {
    background-color: black;
    height: 150px;
    text-align: center;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
  }

  .footer-content {
    border-top: 1px solid;
    border-bottom: 1px solid;
    padding: 15px 32px;
    display: inline-flex;
    font-size: 12px;
  }

  .footer-info {
    float: left;
    padding: 20px;
    color: white;
  }
</style>