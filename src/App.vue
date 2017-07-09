<template>
  <div class="col-sm-12">
    <app-header @searchCDN="fetchData"></app-header>
   <app-cdn-list :searchData="searchData" @cdnCopied='copyCDN'></app-cdn-list>
  </div>
</template>

<script>
const URL = `https://api.cdnjs.com/libraries?search=`;
import axios from 'axios';
import Header from './components/Header.vue';
import CdnList from './components/CdnList.vue';
export default {
  
  data: function (){
  return {
      searchData: []
  }
  },
  components: {
        appCdnList: CdnList,
        appHeader: Header
  },
  methods: {
    fetchData (search){
      axios.get(URL + search +'&fields=version,description')
      .then( (response) => {
        this.searchData = response.data.results;
         console.log(response);
      })
    },
    copyCDN (index){
    this.$clipboard(this.searchData[index].latest);
      console.log(this.searchData[index].latest);
    }
  }
}
</script>

<style>
body {
  
  margin: 0px;
}

div {
  text-align: center;
}
</style>
