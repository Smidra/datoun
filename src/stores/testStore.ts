import { makeStore } from "./makeStore.ts";
import { ref } from "vue";

export const TEST_STORE_KEY = Symbol("testStoreKey");

export interface TestStoreDependencies {
  getPrefix: () => string;
}

export const createTestStore = (dep: TestStoreDependencies) => {
  const getPrefixFn = dep.getPrefix;
  const counter = ref(0);

  const books = ref({ booksArray: [{ key: 0, value: { name: "jmeno knihy 1" } }] });

  const reportCounter = () => {
    return `${getPrefixFn()} : ${counter.value}`;
  };

  const increaseCounter = (by: number) => {
    counter.value += by;
  };

  const resetCounter = () => {
    counter.value = 0;
  };

  return {
    reportCounter,
    increaseCounter,
    resetCounter,
    __DEBUG: counter,
  };
};

const [useInjectTestStore, useProvideTestStore] = makeStore(TEST_STORE_KEY, createTestStore);

export { useInjectTestStore, useProvideTestStore };
