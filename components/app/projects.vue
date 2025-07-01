<template>
    <main class="main">
        <h1 class="title">Кейсы</h1>
        <div class="filters">
            <button class="filter-button" :class="{ 'active': selectedFilter === 'Разработка' }"
                @click="selectedFilter = 'Разработка'">Разработка</button>
            <button class="filter-button" :class="{ 'active': selectedFilter === 'Мобильные приложения' }"
                @click="selectedFilter = 'Мобильные приложения'">Мобильные приложения</button>
            <button class="filter-button" :class="{ 'active': selectedFilter === 'Юзабилити - аудит' }"
                @click="selectedFilter = 'Юзабилити - аудит'">Юзабилити - аудит</button>
            <button class="filter-button" :class="{ 'active': selectedFilter === 'Продвижение' }"
                @click="selectedFilter = 'Продвижение'">Продвижение</button>
        </div>
        <div class="projects-grid" v-if="filteredProjects.length">
            <ProjectCard v-for="project in filteredProjects" :key="project.id" :linkImage="project.image"
                :nameProject="project.title" />
        </div>
        <ProjectSendForm />
    </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useFetch } from '#app';

interface Project {
    id: number;
    title: string;
    slug: string;
    project_url: string | null;
    image: string;
    image_dark: string;
    description: string;
    geo: {
        lat: number | null;
        lng: number | null;
    };
    categories: Array<{
        id: number;
        name: string;
    }>
}

interface ProjectData {
    items: Project[];
}

const selectedFilter = ref<string | null>(null);

const { data } = await useFetch<ProjectData>('https://api.test.cyberia.studio/api/v1/projects ');

const filteredProjects = computed(() => {
    if (!selectedFilter.value) return data.value?.items || [];

    return (data.value?.items || []).filter(project =>
        project.categories.some(category => category.name === selectedFilter.value)
    );
});
</script>

<style lang="scss" scoped>
.main {
    display: flex;
    width: 100%;
    max-width: 1241px;
    flex-direction: column;
    margin: 0 auto;
    padding: 0 20px;

    @include md(false) {
        padding: 0;
    }

    .title {
        font-size: 32px;
        margin-top: 60px;
        color: #EEF3FF;
        text-align: center;

        @include sm(false) {
            font-size: 40px;
            margin-top: 80px;
        }

        @include md(false) {
            font-size: 48px;
            margin-top: 130px;
            text-align: left;
        }
    }

    .filters {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
        font-size: 16px;
        margin-top: 40px;

        @include sm(false) {
            gap: 20px;
            font-size: 18px;
            margin-top: 50px;
        }

        @include md(false) {
            display: flex;
            gap: 100px;
            font-size: 24px;
            margin-top: 65px;
        }

        .filter-button {
            height: 45px;
            text-decoration: none;
            border: none;
            box-shadow: 0px 3px 3px #23252f;
            border-radius: 7px;
            padding: 10px 15px;
            text-wrap: nowrap;
            background: #313341;
            color: #EEF3FF;
            cursor: pointer;
            transition: background 0.3s ease;
            font-size: inherit;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;

            @include md(false) {
                height: 50px;
                padding: 10px 30px;
                box-shadow: 0px 5px 5px #23252f;
            }

            &.active {
                background: #5c6370;
            }

            &:hover {
                background: #424556;

                &.active {
                    background: #5c6370;
                }
            }
        }
    }

    .projects-grid {
        display: flex;
        flex-direction: column;
        gap: 30px;
        margin-top: 40px;

        @include sm(false) {
            gap: 35px;
            margin-top: 50px;
        }

        @include md(false) {
            display: grid;
            grid-template-columns: 1fr 387px 378px;
            gap: 40px;
            margin-top: 60px;
        }
    }
}
</style>