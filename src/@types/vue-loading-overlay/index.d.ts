declare module 'vue-loading-overlay' {
    import { PluginFunction } from "vue";

    export const install: PluginFunction<{}>;

    interface LoadingApi {
        show(): void;
        hide(): void;
    }

    module "vue/types/vue" {
        interface Vue {
            $loading: LoadingApi;
        }
    }
}