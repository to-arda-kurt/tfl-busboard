/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_TFL_API_KEY : string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}