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
              <p>{{ habilidade.caption }}</p>
            </q-card-section>
            <q-card-actions>
              <q-btn
                round
                icon="edit"
                color="blue"
                @click="editSkill(habilidade)"
              />
              <q-btn
                round
                icon="close"
                color="red"
                @click="deleteSkill(habilidade.id)"
              />
            </q-card-actions>
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
    <q-card style="width: 100rem">
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

const listaHabilidades = ref<ListaArray[]>([]);

const newSkill = ref({
  title: '',
  caption: '',
  value: 1,
});

const editingSkill = ref<ListaArray | null>(null);

function openDialog() {
  dialog.value = true;
  newSkill.value = { title: '', caption: '', value: 1 };
}

function addSkill() {
  if (editingSkill.value) {
    Object.assign(editingSkill.value, newSkill.value);
    editingSkill.value = null;
  } else {
    listaHabilidades.value.push({
      title: newSkill.value.title,
      caption: newSkill.value.caption,
      value: newSkill.value.value,
      icon: 'pets',
      id: listaHabilidades.value.length + 2,
      editing: false,
    });
  }
  dialog.value = false;
}

function editSkill(habilidade: ListaArray) {
  editingSkill.value = habilidade;
  newSkill.value = { ...habilidade };
  openDialog();
}

function deleteSkill(id: number) {
  listaHabilidades.value = listaHabilidades.value.filter(
    (habilidade) => habilidade.id !== id
  );
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
