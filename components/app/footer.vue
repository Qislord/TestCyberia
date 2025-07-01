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
                <div class="contact-info">
                    <a class="link" href="tel:+79991234567">+7 999 123 45 67</a>
                    <a class="link" href="mailto:hello@cyberia.studio">hello@cyberia.studio</a>
                    <a class="link" href="#">ул.Ярных,д35,оф.30</a>
                </div>
                <div class="nav-links">
                    <a class="link" href="#">Агентство</a>
                    <a class="link" href="#">Услуги</a>
                    <a class="link" href="/projects">Кейсы</a>
                </div>
                <div class="additional-links">
                    <a class="link" href="#">Блог</a>
                    <a class="link" href="#">Контакты</a>
                </div>
            </nav>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    width: 100vw;
    min-height: 300px;
    background: #31313F;
    padding: 40px 0;

    @include sm(false) {
        min-height: 350px;
        padding: 50px 0;
    }

    @include md(false) {
        height: 400px;
        padding: 0;
    }

    .footer-wrapper {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        width: 100%;
        max-width: 1240px;
        height: 100%;
        padding: 0 20px;
        gap: 40px;
        justify-content: center;

        @include sm(false) {
            gap: 50px;
        }

        @include md(false) {
            flex-direction: row;
            align-items: center;
            gap: 157px;
            padding: 0;
        }

        .logotype-block {
            color: white;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;

            @include md(false) {
                text-align: left;
                align-items: flex-start;
            }

            img {
                width: 150px;
                height: auto;

                @include sm(false) {
                    width: 170px;
                }

                @include md(false) {
                    width: 196px;
                    height: 41px;
                }
            }

            p {
                font-size: 14px;
                line-height: 1.4;
                margin: 0;

                @include sm(false) {
                    font-size: 16px;
                }

                br {
                    @include sm(true) {
                        display: none;
                    }
                }
            }
        }

        .nav {
            display: flex;
            flex-direction: row;
            gap: 30px;
            text-align: center;
            justify-content: center;

            @include sm(false) {
                gap: 35px;
            }

            @include md(false) {
                flex-direction: row;
                gap: 80px;
                text-align: left;
            }

            div {
                display: flex;
                flex-direction: column;
                gap: 15px;

                @include sm(false) {
                    gap: 18px;
                }

                @include md(false) {
                    gap: 20px;
                }
            }

            .contact-info {
                .link {
                    font-weight: 500;

                    &:first-child {
                        font-size: 16px;

                        @include sm(false) {
                            font-size: 18px;
                        }
                    }
                }
            }

            .link {
                text-decoration: none;
                color: white;
                transition: color 0.3s ease;
                font-size: 14px;

                @include sm(false) {
                    font-size: 16px;
                }

                &:hover {
                    color: #ccc;
                }
            }
        }
    }
}
</style>