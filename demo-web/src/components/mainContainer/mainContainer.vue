<template>
    <div class="main-container" :class="$store.state.mainContainer && $store.state.mainContainer.currentTheme">
        <router-view />
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainContainerStore from './mainContainer.store';
import Config from '@/config';

@Component({})
export default class MainContainer extends Vue {
    private created() {
        // 设置主题
        MainContainerStore.setTheme(Config.theme);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this c  omponent only -->
<style scoped lang="scss">
.main-container {
    position: relative;
    width: 100%;
    height: 100%;
}
</style>
