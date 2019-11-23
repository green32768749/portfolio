import useFetch from './use-fetch';
import { reactive, ref, toRefs } from '@vue/composition-api';
import { ImageState } from '@/@types/composition';

export default (key: string = 'QAZQAZWFR@R') => {
  const state: ImageState = reactive({
    imageList: [],
    error: null,
    fetching: false,
  });
  const name = ref('');
  const submitted = async () => {
    const { response, error, fetching, fetchData } = useFetch(
      `https://script.google.com/macros/s/AKfycbx2nKhxh5IiPSkI6dsAxNtyRN67wvpAmnK4WETy15BcRJ2VhdHC/exec?key=${key}&name=${name.value}`,
    );
    fetchData();
    if (response) {
      console.log('===');
      console.log(response);
      state.imageList = response;
    }
    state.error = error;
    state.fetching = fetching;
  };
  return { submitted, ...toRefs(state), name };
};
