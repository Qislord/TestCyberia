<template>
    <div class="text">
        Перейдите на страницу кейсы
    </div>
</template>
<style lang="scss" scoped>
.text {
    display: flex;
    width: 100%;
    max-width: 1240px;
    color: #EFF3FF;
    text-align: center;
    margin: 0 auto;
    min-height: calc(100vh - 200px);
    align-items: center;
    justify-content: center;
    font-size: 48px;
    padding: 0 20px;

    @include lg(true) {
        min-height: calc(100vh - 180px);
        font-size: 40px;
        padding: 0 24px;
    }

    @include md(true) {
        min-height: calc(100vh - 160px);
        font-size: 36px;
        padding: 0 20px;
    }

    @include sm(true) {
        min-height: calc(100vh - 140px);
        font-size: 28px;
        padding: 0 16px;
    }

    @include xs(true) {
        min-height: calc(100vh - 120px);
        font-size: 24px;
        padding: 0 12px;
        line-height: 1.2;
    }
}
</style>