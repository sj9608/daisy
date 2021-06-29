<template>
    <!-- wait Window -->
    <div id='wait-window' class='hide'></div>

    <!-- app verison, alert Text -->
    <div style="margin: 8px" max-width="960px" id='header'>
        <div class='info_text'></div>
        <div class='alert_text'>ok</div>
    </div>

    <!-- 컨트롤 패널 -->
    <div id='control_panel' class='box-unit'>

        <div class='box-unit'>
            <!-- <button id='btn-img-file-list'>img files</button> -->
            <!-- <button id='btn-voc-file-list'>voc files</button> -->
            <button id='btn-enable-select'> enable edit img </button>

            <!-- <button id='btn-next-img'> Next Img</button> -->

            <button id='btn-fitin'> fit in rect </button>
            <button id='btn-zoomout'> zoom out </button>
            <button id='btn-reset-transform'> reset tranform </button>
            <button id='btn-find-nolabeledimg'> 라벨링 안된 이미지만 보이기 </button>

            <div class="hide" id='frame-select'>
                frame : <input type="range" value = 0 > total <span class='total'></span>
            </div>

        </div>

        <div class="box-unit">
            <input id='save-file-name'>
            <!-- <button id='btn-save'>save image</button> -->
            <button id='btn-save-label'>save annotation</button>
        </div>

        <!-- <div class='box-unit'>
            <label for="file">
                <span>Select your file</span>
                <input type="file" name='file'>
            </label>
        </div> -->


        <div id='label_edit' class='box-unit'>

            <div class='box-unit edit-property'>
                <select class='label_name'>
                </select> xmin : <input class='xmin'> ymin : <input class='ymin'> xmax : <input class='xmax'> ymax :
                <input class='ymax'>
            </div>
            <!-- <input class='label_name' value='0'> -->
            <button class='add'>add</button>
            <button class='set'>set</button>
            <button class='del'>del</button>
            <button class='batch'>batch</button>
        </div>
    </div>

    <!-- editor, list container -->
    <div style="position:absolute;" id="editor-window">
        <canvas style="position:absolute;" id='mainCanvas' width="1024" height="1024"></canvas>

        <ul class='box-unit list-container-1' id = 'file-list-container-img'></ul>
        <ul class='box-unit list-container-1 hide' id = 'file-list-container-voc'></ul>
    </div>

</template>


<script>
// fabric.min.js
// fabric-history.js

export default {
    
}
</script>


<style>
.hide {
    display: none;
}

.box-unit {
    margin: 8px;
    padding: 4px;
    border: 1px solid rgba(0, 0, 0);
}

.box-unit button {
    margin: 4px;
}

.file-list-container {
    position: absolute;
    width: 128px;
    height: 64px;
}

li {
    list-style: none;
}

li.selected {
    color: white;
    background-color: black;
}

.list-container-1 {
    position: absolute;
    width: 240px;
    height: 480px;
    transform: translate(1024px, -1024px)
}

#wait-window {
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

</style>