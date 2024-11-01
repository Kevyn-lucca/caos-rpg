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
            <q-card-section class="habilidade-caption">
              <p v-if="!habilidade.editing" @click="habilidade.editing = true">
                {{ habilidade.caption }}
              </p>
              <q-input
                v-else
                v-model="habilidade.caption"
                @blur="habilidade.editing = false"
                type="textarea"
                dense
                autofocus
                borderless
                :style="{
                  resize: 'none',
                  maxHeight: '10em',
                  overflowY: 'auto',
                  whiteSpace: 'pre-line',
                  wordWrap: 'break-word',
                  scroll: 'none',
                }"
              />
            </q-card-section>
          </q-card>
        </template>
      </q-expansion-item>
    </q-list>
  </div>
  <div class="flex row justify-center items-center" style="max-width: 350px">
    <q-btn
      round
      :ripple="{ color: 'yellow' }"
      color="black"
      icon="add"
      @click="openDialog"
    />
  </div>

  <q-dialog v-model="dialog" :backdrop-filter="backdropFilter">
    <q-card style="width: 100rem; height: 100rem">
      <q-card-section class="row items-center q-pb-none text-h6">
        Adicionar Nova Habilidade
      </q-card-section>
      <q-card-section class="row items-center justify-between">
        <q-input
          v-model="newSkill.title"
          style="width: 27rem"
          label="Título"
          filled
        />
        <q-input
          v-model="newSkill.value"
          label="Nível"
          style="width: 5rem"
          filled
          type="number"
        />
      </q-card-section>
      <q-card-section>
        <q-input
          v-model="newSkill.caption"
          label="Descrição"
          filled
          type="textarea"
          style="height: 52rem"
        />
      </q-card-section>

      <q-card-actions style="margin-top: 30px" align="right">
        <q-btn flat label="Cancelar" color="red" v-close-popup />
        <q-btn flat label="Adicionar" color="primary" @click="addSkill" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineOptions({
  name: 'IndexPage',
});

interface ListaArray {
  title: string;
  caption: string;
  icon: string;
  value: number;
  id: number;
  editing?: boolean;
}

const dialog = ref(false);
const backdropFilter = ref('blur(4px) saturate(150%)');

const listaHabilidades = ref<ListaArray[]>([
  {
    title: 'Quebra Ossos',
    caption:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo officiis veniam laborum non ex nulla fugiat recusandae mollitia laudantium deleniti ab, animi nemo velit possimus modi quasi tenetur eligendi incidunt?',
    icon: 'school',
    value: 2,
    id: 1,
    editing: false,
  },
  {
    title: 'Modo Fera',
    caption:
      'Lorem ipsum ex nulla fugia velit possimus modi quasi tenetur eligendi incidunt?',
    icon: 'pets',
    value: 16,
    id: 2,
    editing: false,
  },
]);

const newSkill = ref({
  title: '',
  caption: '',
  value: 1,
});

function openDialog() {
  dialog.value = true;
}

function addSkill() {
  listaHabilidades.value.push({
    title: newSkill.value.title,
    caption: newSkill.value.caption,
    value: newSkill.value.value,
    icon: 'pets',
    id: listaHabilidades.value.length + 1,
    editing: false,
  });
  dialog.value = false;
  newSkill.value = { title: '', caption: '', value: 1 };
}
</script>
<style scoped>
.habilidade-caption {
  max-height: 10em;
  overflow-y: auto;
  white-space: pre-line;
  word-wrap: break-word;
  box-sizing: border-box;
  resize: none !important;
}

.habilidade-edit {
  height: 10em;
  overflow-y: auto;
  white-space: pre-line;
  word-wrap: break-word;
  box-sizing: border-box;
}
</style>
