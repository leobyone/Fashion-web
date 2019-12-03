<template>
  <div id="app">
    <v-header />
    <nuxt />
    <v-footer />
  </div>
</template>
<script>
import axios from 'axios';
import vHeader from '@/components/Header.vue';
import vFooter from '@/components/Footer.vue';
export default {
  name: 'app',
  data() {
    return {
      taglists: ['最新'],
      search: '',
      activeName: '',
    }
  },
  mounted() {
    var _hmt = _hmt || [];
    (function () {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?66af132474dd9a5c2ebd172d8d08e81b";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();
    console.log("%c", "background: url(http://img.binlive.cn/upload/1525010252092) no-repeat center;padding-left:300px;padding-bottom: 200px")
    this.taglist();
    var winwinth = window.innerWidth
    if (this.$route.params.tag === undefined && this.$route.fullPath === '/') {
      this.activeName = '最新';
    } else {
      this.activeName = this.$route.params.tag;
    }
  },
  components: {
    vHeader,
    vFooter
  },
  methods: {
    taglist() {
      axios.get('/api/getArticleLabel').then(
        respone => {
          const tagList = (respone.data.tagList || []).map(item => item.tagName);
          this.taglists = ['最新', ...tagList];
        });
    },
    keyupsearch(ev) {
      if (ev.keyCode === 13) {
        this.searchArticle()
      }
    },
    handleClick(tab) {
      const { index } = tab;
      this.$router.push({ path: `/${index == 0 ? '' : tab.name}` });
    },
    gimobile() {
      window.open('http://www.m.binlive.cn');
    },
    searchArticle() {
      const trimSearch = this.search.trim();
      if (!trimSearch) {
        return this.$notify.info({
          title: '提示',
          message: '您还未输入搜索内容',
          offset: 100
        });
      }
      this.$router.push({ path: `/search/${this.search}` });
    },
    loginpage() {
      window.open("http://admin.binlive.cn/admin");
    }
  }
}
</script>
