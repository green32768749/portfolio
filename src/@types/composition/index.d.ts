import { UnwrapRef, Ref } from '@vue/composition-api/dist/reactivity';


export interface FetchState extends UnwrapRef<any> {
    response: object;
    error: any;
    fetching: boolean;
}

export interface ImageState extends UnwrapRef<any> {
    imageList: object | Array<any>;
    error: any;
    fetching: boolean | Ref<boolean>;
}