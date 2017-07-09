<template>
<div>
   
   <div class="row">
    <app-cdn v-for=" (search,index) in searchData" :key="index">
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
    }
}
</script>

<style>
</style>