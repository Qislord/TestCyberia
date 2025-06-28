<template>
    <footer class="footer">
        <div class="footer-wrapper">
            <div class="logotype-block">
                <nuxt-link to="/">
                    <img src="/img/logotype.png" alt="" width="196px" height="41px">
                </nuxt-link>
                <p>Веб разработка и <br> усиление IT-команд</p>
            </div>
            <nav class="nav">
                <div>
                    <a class="link" href="#">+7 999 123 45 67</a>
                    <a class="link" href="#">hello@cyberia.studio</a>
                    <a class="link" href="#">ул.Ярных,д35,оф.30</a>
                </div>
                <div>
                    <a class="link" href="#">Агентство</a>
                    <a class="link" href="#">Услуги</a>
                    <a class="link" href="#">Кейсы</a>
                </div>
                <div>
                    <a class="link" href="#">Блог</a>
                    <a class="link" href="#">Контакты</a>
                </div>
            </nav>
        </div>
    </footer>
</template>
<style lang="scss" scoped>
.footer {
    width: 100%;
    height: 400px;
    background: #31313F;

    .footer-wrapper {
        display: flex;
        margin: 0 auto;
        width: 1240px;
        height: 100%;
        align-items: center;
        gap: 157px;

        .logotype-block{
            color:white;
        }

        div {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .nav {
            display: flex;
            flex-direction: row;
            gap: 80px;
        }

        .link {
            text-decoration: none;
            color: white;
        }
    }


}
</style>