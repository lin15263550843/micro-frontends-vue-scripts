<!-- 404 page -->
<template>
    <div class="page-404">
        <h1>
            <span>页面不存在</span>
            <br />
        </h1>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Page404 extends Vue {}
</script>

<style lang="scss">
.page-404 {
    padding: 16px;
}
</style>
