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

        <BottomNav></BottomNav>
    </v-app>
</template>

<script>
import KakaoMap from './components/KakaoMap';
import BottomNav from './components/BottomNav.vue';

export default {
  name: 'App',

  components: {
    KakaoMap,
    BottomNav
  },

  data: () => ({
    //
  }),
};
</script>
