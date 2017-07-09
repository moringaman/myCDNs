<template>

    <div class="panel panel-default">
  <div class="panel-body">
    <slot>
    </slot>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
div {
    
    font-family: roboto;
    font-size: 18px;
}

.panel {
    margin: 20px 5%;
    text-align: left;
}

.panel:hover{
    background-color:black;
    color: #fff;
}

h3 {
    font-weight: bold;
}
</style>