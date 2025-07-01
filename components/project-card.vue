<template>
    <div class="card-container">
        <img class="img" :src="props.linkImage" alt="not found">
        <div class="link-project">{{ props.nameProject }}</div>
        <img class="icon-link" src="/img/icon-link.png" alt="not found">

    </div>
</template>
<script setup lang="ts">
interface ProjectCardProps {
    linkImage: string
    nameProject: string
}
const props = defineProps<ProjectCardProps>()


</script>
<style lang="scss" scoped>
.card-container {
    margin-top: 50px;
    width: 387px;
    height: 378px;
    position: relative;

    @include lg(true) {
        width: 100%;
        height: auto;
        aspect-ratio: 1;
        margin: 50px 16px 0;
    }

    @include md(true) {
        margin: 40px 12px 0;
    }

    @include sm(true) {
        margin: 30px 8px 0;
    }

    &:hover {
        .icon-link {
            margin: 32px 36px;
            transition: 0.5s;

            @include lg(true) {
                margin: 6% 8%;
            }

            @include md(true) {
                margin: 5% 7%;
            }

            @include sm(true) {
                margin: 4% 6%;
            }
        }
    }

    .img {
        aspect-ratio: 1;
        object-fit: cover;
        border-radius: 12px;
        width: 100%;
        height: 100%;

        @include sm(true) {
            border-radius: 8px;
        }
    }

    .link-project {
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
        cursor: pointer;
        background: #313341;

        @include lg(true) {
            width: 33%;
            height: 33%;
            margin: 6% 7%;
            font-size: 20px;
        }

        @include md(true) {
            font-size: 18px;
            margin: 5% 6%;
        }

        @include sm(true) {
            font-size: 16px;
            margin: 4% 5%;
            border-radius: 4px;
        }

        @include xs(true) {
            font-size: 14px;
            margin: 3% 4%;
        }
    }

    .icon-link {
        position: absolute;
        top: 0;
        right: 0;
        margin: 17px 21px;
        transition: 0.5s;

        @include lg(true) {
            margin: 4.5% 5.5%;
            width: 24px;
            height: 24px;
        }

        @include md(true) {
            margin: 4% 5%;
            width: 22px;
            height: 22px;
        }

        @include sm(true) {
            margin: 3.5% 4.5%;
            width: 20px;
            height: 20px;
        }

        @include xs(true) {
            margin: 3% 4%;
            width: 18px;
            height: 18px;
        }
    }

}
</style>