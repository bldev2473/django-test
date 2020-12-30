<template>
    <v-app>
        <div id="map" style="width:500px;height:400px;"></div>
        <global-component></global-component>
    </v-app>
</template>
<script>
export default {
    mounted() {
        if (window.kakao && window.kakao.maps) {
            this.initMap();
        } else {
            const script = document.createElement('script');
            /* global kakao */
            script.onload = () => kakao.maps.load(this.initMap);
            script.setAttribute('src', '//dapi.kakao.com/v2/maps/sdk.js?appkey=' + process.env.VUE_APP_KAKAOMAP_API_KEY + '&autoload=false')
            document.head.appendChild(script)
        }
    },

    methods: {
        initMap() {
            var mapContainer = document.getElementById('map'); // 지도를 표시할 div
            var mapOption = {
                center: new kakao.maps.LatLng(33.450701, 126.570667),
                level: 3
            };

            var map = new kakao.maps.Map(mapContainer, mapOption);
            map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);
        }
    }
};
</script>
