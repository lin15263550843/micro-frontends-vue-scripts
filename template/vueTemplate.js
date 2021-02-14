/**
 * .vue 文件模板
 */
module.exports = function vueTemplate(params) {
    return `<!--Created by ${params.authorName} on ${params.dataTime}-->
<template>
    <div class="${params.fileName}">
        coding...
    </div>
</template>
<script lang="ts" src="./${params.fileName}.ts" />
<style scoped lang="scss" src="./${params.fileName}.scss" />
`;
};
