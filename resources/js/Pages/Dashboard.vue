<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/inertia-vue3";
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <v-card class="mx-auto">
            <v-card-text> You're logged in! </v-card-text>
        </v-card>
    </AuthenticatedLayout>
</template>
