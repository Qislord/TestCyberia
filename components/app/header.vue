<template>
    <header class="header">
        <nuxt-link to="/">
            <img class="logotype" src="/img/logotype.png" alt="" width="131px" height="27px">
        </nuxt-link>
        <nav class="nav">
            <a class="link" href="#">Агентство</a>
            <a class="link" href="#">Услуги</a>
            <a class="link" href="#">Кейсы</a>
            <a class="link" href="#">Блог</a>
            <a class="link" href="#">Контакты</a>
        </nav>
    </header>
</template>
<style lang="scss" scoped>
.header {
    display: flex;
    width: 1240px;
    height: 40px;
    margin: 0 auto;
    gap: 190px;
    align-items: center;
    justify-content: left;

    .nav {
        display: flex;
        gap: 60px;

        .link {
            text-decoration: none;
            color: white;
        }
    }


}
</style>