import { Segment } from '@volar/source-map';
import { FileRangeCapabilities } from '@volar/language-core';
import * as CompilerDOM from '@vue/compiler-dom';
import type * as ts from 'typescript/lib/tsserverlibrary';
import { VueCompilerOptions } from '../types';
export declare function generate(ts: typeof import('typescript/lib/tsserverlibrary'), compilerOptions: ts.CompilerOptions, vueCompilerOptions: VueCompilerOptions, sourceTemplate: string, sourceLang: string, templateAst: CompilerDOM.RootNode, hasScriptSetup: boolean, cssScopedClasses?: string[]): {
    codeGen: Segment<FileRangeCapabilities>[];
    formatCodeGen: Segment<FileRangeCapabilities>[];
    cssCodeGen: Segment<FileRangeCapabilities>[];
    tagNames: Record<string, number[]>;
    identifiers: Set<string>;
    hasSlot: boolean;
};
export declare function walkElementNodes(node: CompilerDOM.RootNode | CompilerDOM.TemplateChildNode, cb: (node: CompilerDOM.ElementNode) => void): void;
export declare function getPatchForSlotNode(node: CompilerDOM.ElementNode): CompilerDOM.ForNode | undefined;
