<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
// import * as Database from '@/database/database';

export default {
  name: 'user',
  data() {
    return {
      results: [],
      subs: [],
    };
  },
  async mounted() {
    console.log(window.db);
    /* const db = await Database;
    console.log(db);
    /* this.subs.push(
      db.heroes
      .find().$
      .filter(x => x != null)
      .subscribe(results => {
        console.log('results:');
        // console.dir(results);
        this.results = results;
      })
    ); */
  },
  beforeDestroy() {
    // this.subs.forEach(sub => sub.unsubscribe());
  },
};
</script>
