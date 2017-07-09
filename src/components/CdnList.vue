<template>
<div>
   
   <div class="row">
    <app-cdn v-for=" (search,index) in searchData" :key="search.name"
     @click.native="copyCDN(index)" >
       <h3> {{search.name}}</h3><p>({{search.version}})<p>
       
       <hr>
       {{search.latest}}
        </app-cdn>
     </div>  
    </div>
</template>

<script>

import Cdn from './Cdn.vue'
export default {
    props: ['searchData'],
    data: function (){
        return {
            
        }
    },
    components: {
        appCdn: Cdn
    },
    methods: {
        copyCDN(index){
            this.$emit('cdnCopied', index);
        }
    }
}
</script>

<style>
</style>