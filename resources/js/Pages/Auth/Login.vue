<script setup>
import GuestLayout from "@/Layouts/GuestLayout.vue";

import { Head, Link, useForm } from "@inertiajs/inertia-vue3";

defineProps({
    canResetPassword: Boolean,
    status: String,
});

const form = useForm({
    email: "",
    password: "",
    remember: false,
});

const submit = () => {
    form.post(route("login"), {
        onFinish: () => form.reset("password"),
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="Log in" />
        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>

        <form @submit.prevent="submit">
            <div>
                <v-text-field
                    label="Email"
                    v-model="form.email"
                    required
                    autofocus
                    autocomplete="username"
                    :error-messages="form.errors.email"
                    variant="solo"
                    hide-details="auto"
                ></v-text-field>
            </div>

            <div class="mt-4">
                <v-text-field
                    label="Password"
                    type="password"
                    v-model="form.password"
                    required
                    autocomplete="current-password"
                    :error-messages="form.errors.password"
                    variant="solo"
                    hide-details="auto"
                ></v-text-field>
            </div>

            <div class="block mt-4">
                <v-checkbox
                    v-model="form.remember"
                    label="Remember Me"
                    class="ml-2 text-sm text-gray-600"
                    hide-details="auto"
                ></v-checkbox>
            </div>

            <div class="flex items-center justify-end mt-4">
                <Link
                    v-if="canResetPassword"
                    :href="route('password.request')"
                    class="underline text-sm text-gray-600 hover:text-gray-900"
                >
                    Forgot your password?
                </Link>

                <v-btn
                    color="primary-darken-1"
                    class="ml-4"
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                    type="submit"
                >
                    Log in
                </v-btn>
            </div>
        </form>
    </GuestLayout>
</template>
