<template>
    <header class="header">
        <nuxt-link to="/">
            <img class="logotype" src="/img/logotype.png" alt="" width="131px" height="27px">
        </nuxt-link>

        <button class="burger-btn" @click="toggleMobileMenu" :class="{ active: isMobileMenuOpen }">
            <span></span>
            <span></span>
            <span></span>
        </button>

        <nav class="nav nav-desktop">
            <a class="link" href="#">Агентство</a>
            <a class="link" href="#">Услуги</a>
            <a class="link" href="/projects">Кейсы</a>
            <a class="link" href="#">Блог</a>
            <a class="link" href="#">Контакты</a>
        </nav>

        <nav class="nav nav-mobile" :class="{ open: isMobileMenuOpen }">
            <a class="link" href="#" @click="closeMobileMenu">Агентство</a>
            <a class="link" href="#" @click="closeMobileMenu">Услуги</a>
            <a class="link" href="/projects" @click="closeMobileMenu">Кейсы</a>
            <a class="link" href="#" @click="closeMobileMenu">Блог</a>
            <a class="link" href="#" @click="closeMobileMenu">Контакты</a>
            <div class="contacts">
                <label class="title-contacts">Контакты:</label>
                <span>+7 999 123 45 67</span>
                <span>hello@cyberia.studio</span>
                <span>ул.Ярных, д.35, оф.10</span>
            </div>
        </nav>

        <div class="mobile-overlay" :class="{ active: isMobileMenuOpen }" @click="closeMobileMenu"></div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            isMobileMenuOpen: false
        }
    },
    methods: {
        toggleMobileMenu() {
            this.isMobileMenuOpen = !this.isMobileMenuOpen;
        },
        closeMobileMenu() {
            this.isMobileMenuOpen = false;
        }
    },
    mounted() {
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) {
                this.isMobileMenuOpen = false;
            }
        });
    }
}
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    width: 100%;
    max-width: 1240px;
    height: 40px;
    margin: 0 auto;
    padding: 0 20px;
    align-items: center;
    justify-content: space-between;
    position: relative;

    @include md(false) {
        gap: 190px;
        justify-content: left;
        padding: 0;
    }

    .logotype {
        @include sm(true) {
            margin-left: 27px;
        }

        @include md(false) {
            margin-left: 0;
        }
    }

    .burger-btn {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 24px;
        height: 18px;
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
        z-index: 1001;

        @include md(false) {
            display: none;
        }

        span {
            width: 100%;
            height: 2px;
            background-color: white;
            transition: all 0.3s ease;
            transform-origin: center;
        }

        &.active {
            span:nth-child(1) {
                transform: rotate(45deg) translate(5px, 5px);
            }

            span:nth-child(2) {
                opacity: 0;
            }

            span:nth-child(3) {
                transform: rotate(-45deg) translate(7px, -6px);
            }
        }
    }

    .nav-desktop {
        display: none;

        @include md(false) {
            display: flex;
            gap: 60px;
        }

        .link {
            text-decoration: none;
            color: white;
            border-bottom: 1px solid transparent;
            transition: 0.5s;

            &:hover {
                border-color: white;
            }
        }
    }

    .nav-mobile {
        position: fixed;
        top: 0;
        right: -300px;
        width: 300px;
        height: 100vh;
        background-color: #24252F;
        display: flex;
        flex-direction: column;
        padding: 80px 30px 30px;
        transition: right 0.3s ease;
        z-index: 1000;

        .contacts {
            display: flex;
            flex-direction: column;
            font-size: 16px;
            color: #9AA8BA;
            gap: 20px;

            .title-contacts {
                border-top: 1px solid #2B2D3A;
                padding-top: 40px;
                margin-block: 40px 20px;
                font-size: 18px;
            }

            span:nth-child(4) {
                padding-bottom: 40px;
                border-bottom: 1px solid #2B2D3A;
            }
        }

        @include md(false) {
            display: none;
        }

        &.open {
            right: 0;
        }

        .link {
            text-decoration: none;
            color: white;
            font-size: 18px;
            padding: 15px 0;
            transition: all 0.3s ease;

            &:hover {
                color: #ccc;
                transform: translateX(10px);
            }

            &:last-child {
                border-bottom: none;
            }
        }
    }

    .mobile-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;

        &.active {
            opacity: 1;
            visibility: visible;
        }

        @include md(false) {
            display: none;
        }
    }
}

body.menu-open {
    overflow: hidden;
}
</style>