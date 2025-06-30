<template>
    <main class="main">
        <h1 class="title">Кейсы</h1>
        <div class="filters">
            <button class="filter-button">Продвижение</button>
            <button class="filter-button">Разработка</button>
            <button class="filter-button">Мобильные приложения</button>
            <button class="filter-button">Юзабилити - аудит</button>
        </div>
        <div class="projects-grid" v-if="data?.items?.length">
            <ProjectCard 
                v-for="project in data.items" 
                :key="project.id"
                :linkImage="project.image"
                :nameProject="project.title"
            />
        </div>
    </main>
</template>
<script setup lang="ts">
const {data} = await useFetch('https://api.test.cyberia.studio/api/v1/projects');
</script>
<style lang=scss scoped>
.main {
    display: flex;
    width: 1241px;
    flex-direction: column;
    margin: 0 auto;

    .projects-grid{
        display: grid;
        grid-template-columns: 1fr 387px 378px;
        gap: 40px;
    }

    .title {
        font-size: 48px;
        margin-top: 130px;
        color: #EEF3FF;
    }

    .filters {
        display: flex;
        gap: 100px;
        font-size: 24px;
        margin-top: 65px;
        
        

        .filter-button {
            height: 50px;
            text-decoration: none;
            border: none;
            box-shadow: 0px 5px 5px #23252f;
            border-radius: 7px;
            padding: 10px 30px;
            text-wrap: nowrap;
            background: #313341;    
            color: #EEF3FF;

        }
    }
}
</style>