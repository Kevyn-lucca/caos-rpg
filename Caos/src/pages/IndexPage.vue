<script setup lang="ts">
import SkillsComponent from 'src/components/skillsCompenent.vue';
import StatusComponent from 'src/components/StatusComponent.vue';
</script>
<template>
  <div class="q-gutter-md row justify-around">
    <div class="col-auto">
      <StatusComponent />
    </div>
    <div class="col-auto">
      <SkillsComponent />
    </div>
  </div>
</template>
