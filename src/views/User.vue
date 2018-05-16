<template>
  <section id="user" class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-one-third">
          <router-view :user="user"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'User',
  props: ['user'],
};
</script>
