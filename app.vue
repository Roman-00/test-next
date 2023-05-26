<script lang="ts" setup>
import { useEventsStore } from "@/store/events";

const store = useEventsStore();

store.fetch();
</script>

<template>
    <div>
        <NuxtWelcome />
    </div>
</template>
