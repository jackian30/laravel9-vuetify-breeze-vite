<script setup>
import GuestLayout from "@/Layouts/GuestLayout.vue";

import { Head, useForm } from "@inertiajs/inertia-vue3";

defineProps({
    status: String,
});

const form = useForm({
    email: "",
});

const submit = () => {
    form.post(route("password.email"));
};
</script>

<template>
    <GuestLayout>
        <Head title="Forgot Password" />

        <div class="mb-4 text-sm text-gray-600">
            Forgot your password? No problem. Just let us know your email
            address and we will email you a password reset link that will allow
            you to choose a new one.
        </div>

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

            <div class="flex items-center justify-end mt-4">
                <v-btn
                    color="primary-darken-1"
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                    type="submit"
                >
                    Email Password Reset Link
                </v-btn>
            </div>
        </form>
    </GuestLayout>
</template>
