<template>
  <section id="user" class="section">
    <aside
      id="user-menu"
      class="menu">
    </aside>
    <router-view id="collections-settings" class="settings" :user="user"/>
  </section>
</template>

<script>
export default {
  name: 'User',
  props: ['user'],
};
</script>
