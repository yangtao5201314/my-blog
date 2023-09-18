import { VueCompilerOptions } from '../types';
export declare const typesFileName = "__VLS_types.ts";
export declare function getTypesCode(vueVersion: number, vueCompilerOptions: VueCompilerOptions): string;
export declare function genConstructorOverloads(name?: string, nums?: number): string;
