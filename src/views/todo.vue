<template>
  <div>
    <h1>Project List</h1>

    <ul id="prj_list">
      <li @click="st2dom" v-for="item in items" :key="item">
        {{ item.name }}
      </li>
    </ul>

    
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      configData: {
        prjs: {}
      },
    };
  },

  methods: {
    st2dom(evt) {
      console.log(evt.target.innerText)
    },
  },

  async mounted() {

    try {
      let port = 21030,
      configData = await (await fetch(`http://gears001.iptime.org:${port}/rest/download?filepath=./__config.json`)).json();
      console.log(configData);

      for (let name in configData.prjs) {
        console.log(name);
        this.items.push({name:name})
      }
    }
    catch(e) {
      console.log(e);
    }
  },
};
</script>

<style>
@import "../assets/scss/core.scss";
@import "../assets/scss/prjmng.scss";
</style>
