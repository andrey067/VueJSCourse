<template>

  <div class="column is-7">{{ tarefa.descricao || 'Tarefa sem descrição' }}</div>
  <div class="column">
    <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos" />
  </div>

</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Cronometro from "./CronometroComponent.vue";
import ITarefa from '../interfaces/ITarefa'


export default defineComponent({
  name: "TarefaComponent",
  components: {
    Cronometro,

  },
  props: {
    tarefa: {
      type: Object as PropType<ITarefa>,
      required: true
    }
  }
});
</script>
