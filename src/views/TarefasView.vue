<template>
    <Formulario @aoSalvarTarefa="salvarTarefa" />
    <div class="lista">
        <Box v-if="listaEstaVazia">
            Você não está muito produtivo hoje :(
        </Box>
        <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ITarefa from '../interfaces/ITarefa';
import Formulario from '@/components/FormulárioComponet.vue'
import Tarefa from '@/components/TarefaComponent.vue'
import Box from '@/components/BoxComponent.vue'

export default defineComponent({
    name: "TarefasView",
    components: {
        Formulario,
        Tarefa,
        Box
    },
    data() {
        return {
            tarefas: [] as ITarefa[]
        }
    },
    computed: {
        listaEstaVazia(): boolean {
            return this.tarefas.length === 0
        }
    },
    methods: {
        salvarTarefa(tarefa: ITarefa) {
            this.tarefas.push(tarefa)
        }
    }
});
</script>

<style>
</style>