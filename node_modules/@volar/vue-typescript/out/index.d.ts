import * as vue from '@volar/vue-language-core';
import * as _ from 'typescript/lib/tsserverlibrary';
export declare function createLanguageService(host: vue.VueLanguageServiceHost): {
    __internal__: {
        languageService: _.LanguageService;
        context: {
            typescript: {
                languageServiceHost: _.LanguageServiceHost;
            };
            virtualFiles: {
                allSources(): vue.Source[];
                updateSource(fileName: string, snapshot: _.IScriptSnapshot, languageId: string | undefined): vue.VirtualFile | undefined;
                deleteSource(fileName: string): void;
                getSource(fileName: string): vue.Source | undefined;
                hasSource: (fileName: string) => boolean;
                getMirrorMap: (file: vue.VirtualFile) => vue.MirrorMap | undefined;
                getMaps: (virtualFile: vue.VirtualFile) => [string, vue.SourceMap<vue.FileRangeCapabilities>][];
                hasVirtualFile(fileName: string): boolean;
                getVirtualFile(fileName: string): readonly [vue.VirtualFile, vue.Source] | readonly [undefined, undefined];
            };
        };
    };
} & _.LanguageService;
