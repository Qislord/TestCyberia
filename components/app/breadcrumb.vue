<template>
    <div class="breadcrumb">
        <UBreadcrumb :items="items">
            <template #separator>
                <span class="separator">/</span>
            </template>
        </UBreadcrumb>
    </div>
</template>
<script setup lang="ts">
import type { BreadcrumbItem } from '@nuxt/ui'

const items: BreadcrumbItem[] = [
    {
        label: 'Главная',
        to: '/'
    },
    {
        label: 'Кейсы',
        to: '/projects'
    },
]
</script>
<style lang="scss" scoped>
.breadcrumb {
    display: flex;
    margin: 0 auto;
    width: 1240px;

    :deep(ol) {
        display: flex;
        margin-top: 65px;

    }
    :deep(a) {
        text-decoration: none;
        color: #C4D2E3;
    }

    .separator {
        margin-inline: 4px;
        text-wrap: nowrap;
        color: #C4D2E3;
    }
}
</style>