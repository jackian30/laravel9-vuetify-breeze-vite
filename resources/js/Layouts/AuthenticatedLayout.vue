<script setup>
import { Inertia } from "@inertiajs/inertia";
import { Link, usePage } from "@inertiajs/inertia-vue3";
import { reactive } from "@vue/reactivity";

import ApplicationLogo from "@/Components/ApplicationLogo.vue";

const states = reactive({
    drawer: true,
    items: [
        {
            text: "Dashboard",
            icon: "mdi-monitor-dashboard",
            link: route("dashboard"),
            active: usePage().url.value === "/dashboard",
        },
    ],
});

const logout = () => {
    Inertia.post(route("logout"));
};
</script>

<template>
    <v-app>
        <v-navigation-drawer
            v-model="states.drawer"
            app
            width="300"
            class="border-none"
            color="primary-navigation"
        >
            <div class="grid place-items-center mt-[35px] mb-[50px]">
                <Link :href="route('dashboard')">
                    <ApplicationLogo class="block h-20 w-auto" />
                </Link>
            </div>
            <v-list bg-color="primary-navigation">
                <template v-for="(item, i) in states.items" :key="i">
                    <Link class="no-underline text-[#4F4F4F]" :href="item.link">
                        <v-list-item
                            :value="item"
                            active-class="opacity-100"
                            active-color="#4F4F4F"
                            color="#828190"
                            variant="plain"
                            :active="item.active"
                            :prepend-icon="item.icon"
                            :title="item.text"
                        />
                    </Link>
                </template>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
            app
            elevation="0"
            style="border-bottom: 1px solid rgba(177, 189, 219, 0.1)"
        >
            <v-app-bar-nav-icon
                variant="text"
                @click.stop="states.drawer = !states.drawer"
            ></v-app-bar-nav-icon>

            <v-spacer></v-spacer>

            <v-menu
                anchor="bottom start"
                origin="top end"
                transition="scale-transition"
            >
                <template v-slot:activator="{ props }">
                    <v-btn variant="text" v-bind="props" rounded>
                        {{ $page.props.auth.user.name }}</v-btn
                    >
                </template>

                <v-list>
                    <v-list-item @click="logout">
                        <v-list-item-title>Log Out</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>

        <!-- Page Content -->
        <v-main>
            <v-container>
                <slot />
            </v-container>
        </v-main>
    </v-app>
</template>
