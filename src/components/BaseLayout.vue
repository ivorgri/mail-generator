<template>
  <section class="section">
    <aside>
      <slot name="aside"></slot>
    </aside>
    <main>
      <slot></slot>
    </main>
    <div>
      <slot name="element"></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BaseLayout',
};
</script>
