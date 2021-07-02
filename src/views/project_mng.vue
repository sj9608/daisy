<template>
<div class="box-unit">
    <div>
        name : <input class="prj_name">
    </div>

    <div>
        base ip : <input class='base_ip half_size'><br>
        rest port : <input class='rest_port half_size' alue=20831><br>
        wine port : <input class='wine_port half_size' value=20833><br>
    </div>

    <div>
        dataset path : <input class='dataset_path full_size'> <br> 
        uplload path : <input class="upload_path full_size"> <br>
        repos path : <input class="repos_path full_size"> <br>
    </div>

    <div class="box-unit">
        image size : <input class='imgsz full_size'>
    </div>

    <div class="box-unit">
        <!-- <button class="apply">apply</button> -->
        <button class="delete">delete</button>
        <button class="export">export</button>
        <button class="clear">clear</button>
        <button class="add">Add Proejct</button>
    </div>

    <div id="prj_list" class="box-unit">
        <ul></ul>
    </div>

</div>
<div id="log_text">

</div>

</template>

<script>
export default {};
</script>

<style>
@import "../assets/scss/core.scss";
</style>