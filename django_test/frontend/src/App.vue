<template>
    <v-app>
    <v-navigation-drawer app>
        <!-- -->
        </v-navigation-drawer>

        <v-app-bar app>
        <!-- -->
        </v-app-bar>

        <!-- Sizes your content based upon application components -->
        <v-main>

            <!-- Provides the application the proper gutter -->
            <v-container fluid>

            </v-container>
        </v-main>
        <v-main>
            <button v-on:click="showLog">Show Log</button>
            <KakaoMap/>
        </v-main>

        <v-footer app>
        <!-- -->
        </v-footer>
    </v-app>
</template>

<script>
import KakaoMap from './components/KakaoMap';

import { eventBus } from './main';

export default {
    name: 'App',

    components: {
        KakaoMap
    },

    data: () => ({

    }),

    methods: {
        showLog() {
        var message = 'Message From App.vue'
            eventBus.$emit('triggerEventBus', message);
        }
    }
}
</script>
