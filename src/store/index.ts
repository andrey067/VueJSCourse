import IProjeto from "@/interfaces/IProjeto";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from 'vuex'
import { Guid } from 'guid-ts'

interface EstadoApp {
    projetos: Array<IProjeto>
}

export const key: InjectionKey<Store<EstadoApp>> = Symbol();

export const store = createStore<EstadoApp>({
    state: {
        projetos: []
    },
    mutations: {
        'ADICIONA_PROJETO'(state, nomeDoProjeto: string) {
            const projeto = {
                id: Guid.newGuid().toString(),
                name: nomeDoProjeto
            } as unknown as IProjeto
            state.projetos.push(projeto)
        }
    }
});

export function useStore(): Store<EstadoApp> {
    return vuexUseStore(key)
}