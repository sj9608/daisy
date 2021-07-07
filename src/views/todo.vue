<template>
<body>
  <div style="text-align: center">
    <h1>Project List</h1>
    <a>{{ prjState }}</a>

    <ul id="prj_list">
      <li @click="st2dom" v-for="item in items" :key="item">
        {{ item.name }}
      </li>
    </ul>

    <button @click="show_detail">Show Details...</button>
    <!-- 디테일 -->
    <div v-if="on_detail">
      <div class="box-unit">
        <div>name : <input v-model="prj_name" /></div>

        <div>
          base ip : <input v-model="base_ip" /><br />
          rest port : <input v-model="rest_port"><br />
          wine port : <input v-model="wine_port"><br />
        </div>

        <div>
          dataset path<br />
          <input v-model="dataset_path" class="full_size" /><br />
          upload path<br />
          <input v-model="upload_path" class="full_size" /><br />
          repos path<br />
          <input v-model="repos_path" class="full_size" /><br />
        </div>

        <div class="box-unit">
          image size : <input v-model="imgsz" class="full_size" />
        </div>

        <div class="box-unit">
          <!-- <button class="apply">apply</button> -->
          <button @click="prj_delete">delete</button>
          <button @click="prj_export">export</button>
          <button @click="prj_clear">clear</button>
        </div>
      </div>
    </div>
  </div>
</body>
</template>

<script>
export default {
  data() {
    return {
      prjState: "",
      on_detail: false,
      items: [],
      configData: {
        prjs: {},
      },
    };
  },

  methods: {
    addLog(msg) {
      this.prjState = msg;
    },
    show_detail() { // Show Details button click event 
      if (this.on_detail == true) this.on_detail = false;
      else {
        this.on_detail = true;
        this.prj_name = localStorage.prj_name;
        this.base_ip = localStorage.base_ip;
        this.rest_port = localStorage.rest_port;
        this.wine_port = localStorage.wine_port;
        this.repos_path = localStorage.repos_path;
        this.dataset_path = localStorage.dataset_path;
        this.upload_path = localStorage.upload_path;
        this.imgsz = localStorage.imgsz;
      }
    },
    dom2st() { // dom 2 storage

    },
    st2dom(evt) { // list click event
      // console.log(this.configData.prjs[evt.target.innerText]);
      // let name = evt.target.name;

      let name = evt.target.innerText;
      let _prj_config = this.configData.prjs[name];

      this.prj_name = localStorage.prj_name = name;
      this.base_ip = localStorage.base_ip = _prj_config.base_ip;
      this.rest_port = localStorage.rest_port = _prj_config.rest_port;
      this.wine_port = localStorage.wine_port = _prj_config.wine_port;

      this.repos_path = localStorage.repos_path = this.configData.repos_path;
      this.dataset_path = localStorage.dataset_path = `${_prj_config.dataset_path}`;
      this.upload_path = localStorage.upload_path = `${_prj_config.upload_path}`;

      this.imgsz = localStorage.imgsz = _prj_config.imgsz;
      this.addLog(`Current Project : ${localStorage.prj_name}`);
    },
    async _saveConfig() {
      let _out = JSON.stringify(this.configData);
      let _ = await (await (fetch(`http://gears001.iptime.org:21030/res/upload2`, {
        method: 'POST',
        body: _out,
        headers: new Headers({
          'Content-Type': 'text/xml',
          'Upload-Name': '__config.json',
          'upload-path': './',
          'file-size': _out.length
        })
      }))).json();
      console.log(_);
      return _;
    },
    prj_delete() { // delete button click event
      if (this.configData && this.configData.prjs && this.configData.prjs[this.prj_name]) {
        delete this.configData.prjs[this.prj_name];
        localStorage.removeItem('prj_name');
        this._saveConfig();
        this.addLog('delete ok');
        location.reload();
      } 
    },
    prj_export() { // export button click event

      this.dom2st();

      
    },
    prj_clear() { // clear button click event

    }
  },

  async mounted() {
    // current Project
    this.prjState = `Current Project : ${localStorage.prj_name}`;

    // Hide detail
    this.on_detail = false;

    // 설정파일 읽어오기
    try {
      let port = 21030,
        configData = await (
          await fetch(
            `http://gears001.iptime.org:${port}/rest/download?filepath=./__config.json`
          )
        ).json();
      // fetch 한 configData를 data에 configData로
      this.configData = configData;
      console.log(configData);

      // 읽어온 project들 items object에 push 
      for (let name in configData.prjs) {
        console.log(name);
        this.items.push({ name: name });
      }
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style>
@import "../assets/scss/core.scss";
@import "../assets/scss/prjmng.scss";
</style>
