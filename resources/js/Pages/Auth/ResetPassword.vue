<script setup>
import GuestLayout from "@/Layouts/GuestLayout.vue";

import { Head, useForm } from "@inertiajs/inertia-vue3";

const props = defineProps({
    email: String,
    token: String,
});

const form = useForm({
    token: props.token,
    email: props.email,
    password: "",
    password_confirmation: "",
});

const submit = () => {
    form.post(route("password.update"), {
        onFinish: () => form.reset("password", "password_confirmation"),
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="Reset Password" />

        <form @submit.prevent="submit">
            <div>
                <v-text-field
                    label="Email"
                    v-model="form.email"
                    required
                    autocomplete="username"
                    :error-messages="form.errors.email"
                    hide-details="auto"
                ></v-text-field>
            </div>

            <div class="mt-4">
                <v-text-field
                    label="Password"
                    type="password"
                    v-model="form.password"
                    required
                    autocomplete="new-password"
                    :error-messages="form.errors.password"
                    variant="solo"
                    hide-details="auto"
                ></v-text-field>
            </div>

            <div class="mt-4">
                <v-text-field
                    label="Confirm Password"
                    type="password"
                    v-model="form.password_confirmation"
                    required
                    autocomplete="new-password"
                    :error-messages="form.errors.password_confirmation"
                    variant="solo"
                    hide-details="auto"
                ></v-text-field>
            </div>

            <div class="flex items-center justify-end mt-4">
                <v-btn
                    color="primary-darken-1"
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                    type="submit"
                >
                    Reset Password
                </v-btn>
            </div>
        </form>
    </GuestLayout>
</template>
