<template>
    <div class="breadcrumb">
        <UBreadcrumb v-if="items.length > 0" :items="items">
            <template #separator>
                <span class="separator">/</span>
            </template>
        </UBreadcrumb>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, watch } from 'vue'
import { useRoute } from '#vue-router'
import type { BreadcrumbItem } from '@nuxt/ui'

const route = useRoute()
const items = ref<BreadcrumbItem[]>([])

const slugToLabelMap: { [key: string]: string } = {
    'projects': 'Кейсы',
    'About': 'О нас',
}

function updateBreadcrumbs() {
    items.value = []

    if (route.path === '/') {
        return
    }

    items.value.push({
        label: 'Главная',
        to: '/'
    })

    const segments = route.path.split('/').filter(Boolean)
    let currentPath = ''

    for (const segment of segments) {
        currentPath += `/${segment}`
        const label = slugToLabelMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1)
        items.value.push({
            label,
            to: currentPath
        })
    }
}

onBeforeMount(() => {
    updateBreadcrumbs()
})

watch(() => route.path, () => {
    updateBreadcrumbs()
})
</script>

<style lang="scss" scoped>
.breadcrumb {
    display: flex;
    margin: 0 auto;
    width: 100%;
    max-width: 1240px;
    padding: 0 20px;

    @include sm(true) {
        padding: 0 16px;
    }

    @include xs(true) {
        padding: 0 12px;
    }

    :deep(ol) {
        display: flex;
        margin-top: 65px;
        flex-wrap: wrap;
        gap: 4px;

        @include md(true) {
            margin-top: 40px;
        }

        @include sm(true) {
            margin-top: 30px;
        }

        @include xs(true) {
            margin-top: 20px;
        }
    }

    :deep(li) {

        @include sm(true) {
            font-size: 14px;
        }

        @include xs(true) {
            font-size: 13px;
        }
    }

    :deep(a) {
        text-decoration: none;
        color: #C4D2E3;
        word-break: break-word;

        @include md {
            &:hover {
                color: #fff;
                transition: color 0.2s ease;
            }
        }
    }

    .separator {
        margin-inline: 4px;
        text-wrap: nowrap;
        color: #C4D2E3;

        @include sm(true) {
            margin-inline: 3px;
            font-size: 14px;
        }

        @include xs(true) {
            margin-inline: 2px;
            font-size: 13px;
        }
    }
}
</style>