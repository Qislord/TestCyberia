<template>
    <div class="card-container">
        <img class="img" :src="props.linkImage" alt="not found">
        <div class="link-project">{{ props.nameProject }}</div>
        <img class="icon-link" src="/img/icon-link.png" alt="not found">
    </div>
</template>
<script setup lang="ts">

const props = defineProps({
    linkImage: {
        type: String,
        required: true
    },
    nameProject: {
        type: String,
        required: true
    }
})


</script>
<style lang="scss" scoped>
.card-container{
    margin-top: 50px;
    width: 387px;
    height: 378px;
    position: relative;

    .img{
        aspect-ratio: 1;
    }
    .link-project{
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
        position: absolute;
        font-size: 24px;
        color: #FFFFFF;
        border-radius: 5px;
        top: 0;
        right: 0;
        width: 128px;
        height: 128px;
        margin: 23px 27px;
        background: #313341;
    }
    .icon-link{
        position: absolute;
        top: 0;
        right: 0;
        margin: 17px 21px;
    }
}
</style>