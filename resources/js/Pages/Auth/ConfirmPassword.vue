<script setup>
import GuestLayout from "@/Layouts/GuestLayout.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import { Head, useForm } from "@inertiajs/inertia-vue3";

const form = useForm({
    password: "",
});

const submit = () => {
    form.post(route("password.confirm"), {
        onFinish: () => form.reset(),
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="Confirm Password" />

        <div class="mb-4 text-sm text-gray-600">
            This is a secure area of the application. Please confirm your
            password before continuing.
        </div>

        <form @submit.prevent="submit">
            <div>
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

            <div class="flex justify-end mt-4">
                <v-btn
                    color="primary-darken-1"
                    class="ml-4"
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                    type="submit"
                >
                    Confirm
                </v-btn>
            </div>
        </form>
    </GuestLayout>
</template>
