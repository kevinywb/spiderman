<template>
  <div class="left-side">
    <div class="left-side-inner">
      <router-link to="/" class="logo block">
        <img src="../../assets/images/spiderman.png" alt="Gerapy"><span class="title">Spiderman</span>
      </router-link>
      <el-menu
        class="menu-box"
        theme="dark"
        router
        :default-active="$route.path">
        <el-menu-item
          class="menu-list"
          index="/client">
          <i class="icon fa fa-television"></i>
          <span v-text="$lang[$store.state.lang].menus.clients" class="text"></span>
        </el-menu-item>
        <el-menu-item
          class="menu-list"
          index="/project">
          <i class="icon fa fa-folder-o"></i>
          <span v-text="$lang[$store.state.lang].menus.projects" class="text"></span>
        </el-menu-item>
        <el-menu-item
          class="menu-list"
          index="/task">
          <i class="icon fa fa-hdd-o"></i>
          <span v-text="$lang[$store.state.lang].menus.tasks" class="text"></span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default{
    name: 'slide',
    data(){
      return {}
    }
  }
</script>
<style>
  .left-side .logo {
    text-align: left !important;
  }

  .left-side .logo img {
    width: 80px;
    height: 80px;
  }

  .left-side .title{
    color: #fff;
    font-family: fantasy;
    font-size: 26px;
    vertical-align: middle;
  }
</style>
