/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_SERVER_API_URL: string;
    readonly VITE_KAKAO_JAVASCRIPT_KEY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}