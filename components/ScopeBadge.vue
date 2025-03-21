<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  scopeShortName: String,
});
</script>

<template>
<span class="scope-badge">
  <a :href="`/scopes/${props.scopeShortName}`">{{ props.scopeShortName}}</a>
</span>
</template>

<style scoped>

.scope-badge {
  order-color: var(--vp-badge-info-border);
  color: var(--vp-badge-tip-text);
  background-color: var(--vp-badge-info-bg);
  display: inline-block;
  margin-right: 2px;
  border: 1px solid transparent;
  border-radius: 12px;
  padding: 2px 10px;
  line-height: 22px;
  font-size: 12px;
  font-weight: 500;
  transform: translateY(-2px);
}
</style>