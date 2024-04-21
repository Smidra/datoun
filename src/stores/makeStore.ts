import { inject, InjectionKey, provide } from "vue";

interface StoreFactory<TArgs extends any[], TStore> {
  (...args: TArgs): TStore;
}

export type MakeStoreResult<TArgs extends any[], TStore> = readonly [
  useInjectedState: () => TStore,
  useProvidingState: (...args: TArgs) => TStore,
];

function makeUseInjectedStore<TStore>(name: symbol | string | InjectionKey<TStore>): () => TStore {
  return () => {
    const store = inject(name);
    if (!store) throw new Error(`${String(name)} is unavailable.`);
    return store;
  };
}

export function makeStore<TArgs extends any[], TStore>(
  name: symbol | string | InjectionKey<TStore>,
  composable: StoreFactory<TArgs, TStore>,
): MakeStoreResult<TArgs, TStore> {
  const useInjectState = makeUseInjectedStore<TStore>(name);

  const useProvideState = (...args: TArgs): TStore => {
    const state = composable(...args);
    provide(name, state);
    return state;
  };
  return [useInjectState, useProvideState] as const;
}
