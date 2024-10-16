<style scoped></style>

<template>
  <div class="q-pa-md" style="max-width: 350px">
    <q-list>
      <q-expansion-item
        v-for="habilidade in listaHabilidades"
        :key="habilidade.id"
        :icon="habilidade.icon"
        :label="habilidade.title"
        :caption="`Nível: ${habilidade.value}`"
        class="rounded-borders"
      >
        <template #default>
          <q-card>
            <q-card-section>
              <p>{{ habilidade.caption }}</p>
            </q-card-section>
          </q-card>
        </template>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
});

interface ListaArray {
  title: string;
  caption: string;
  icon: string;
  value: number;
  id: number;
}

const listaHabilidades: ListaArray[] = [
  {
    title: 'Quebra Ossos',
    caption:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo officiis veniam laborum non ex nulla fugiat recusandae mollitia laudantium deleniti ab, animi nemo velit possimus modi quasi tenetur eligendi incidunt?',
    icon: 'school',
    value: 2,
    id: 1,
  },
  {
    title: 'Modo Fera',
    caption:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo officiis veniam laborum non ex nulla fugiat recusandae mollitia laudantium deleniti ab, animi nemo velit possimus modi quasi tenetur eligendi incidunt?',
    icon: 'pets',
    value: 16,
    id: 2,
  },
];
</script>
