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
            <KakaoMap/>
        </v-main>

        <v-footer app>
        <!-- -->
        </v-footer>
    </v-app>
</template>

<script>
import KakaoMap from './components/KakaoMap';

export default {
  name: 'App',

  components: {
    KakaoMap
  },

  data: () => ({
    //
  }),
};
</script>
