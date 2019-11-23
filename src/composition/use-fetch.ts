import { toRefs, reactive } from '@vue/composition-api';
import { FetchState } from '@/@types/composition';

export default (url: RequestInfo, options?: RequestInit | undefined) => {
  const state: FetchState = reactive({
    response: {},
    error: null,
    fetching: false,
  });
  const fetchData = async () => {
    state.fetching = true;
    try {
      const res = await fetch(url, options);
      const data = await res.json();
      state.response = data;
    } catch (error) {
      state.error = error;
    } finally {
      state.fetching = false;
    }
  };
  return { ...toRefs(state), fetchData };
};
