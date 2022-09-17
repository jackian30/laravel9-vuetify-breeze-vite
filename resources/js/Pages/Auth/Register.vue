<script setup>
import GuestLayout from "@/Layouts/GuestLayout.vue";

import { Head, Link, useForm } from "@inertiajs/inertia-vue3";

const form = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    terms: false,
});

const submit = () => {
    form.post(route("register"), {
        onFinish: () => form.reset("password", "password_confirmation"),
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="Register" />

        <form @submit.prevent="submit">
            <div>
                <v-text-field
                    label="Name"
                    v-model="form.name"
                    required
                    autofocus
                    autocomplete="name"
                    :error-messages="form.errors.name"
                    hide-details="auto"
                ></v-text-field>
            </div>

            <div class="mt-4">
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
                <Link
                    :href="route('login')"
                    class="underline text-sm text-gray-600 hover:text-gray-900 mr-4"
                >
                    Already registered?
                </Link>

                <v-btn
                    color="primary-darken-1"
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                    type="submit"
                >
                    Register
                </v-btn>
            </div>
        </form>
    </GuestLayout>
</template>
