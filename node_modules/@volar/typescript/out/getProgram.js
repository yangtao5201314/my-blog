Object.defineProperty(exports, "__esModule", { value: true });
exports.getProgram = void 0;
function getProgram(ts, core, ls) {
    const proxy = {
        getRootFileNames,
        emit,
        getSyntacticDiagnostics,
        getSemanticDiagnostics,
        getGlobalDiagnostics,
        // @ts-expect-error
        getBindAndCheckDiagnostics,
    };
    return new Proxy({}, {
        get: (target, property) => {
            if (property in proxy) {
                return proxy[property];
            }
            const program = getProgram();
            if (property in program) {
                return program[property];
            }
            return target[property];
        },
        // commented out because it causes https://github.com/vuejs/language-tools/issues/2403
        // set: (_target, property, newValue) => {
        // 	const program = getProgram();
        // 	(program as any)[property] = newValue;
        // 	return true;
        // },
    });
    function getProgram() {
        return ls.getProgram();
    }
    function getRootFileNames() {
        return getProgram().getRootFileNames().filter(fileName => { var _a, _b; return (_b = (_a = core.typescript.languageServiceHost).fileExists) === null || _b === void 0 ? void 0 : _b.call(_a, fileName); });
    }
    // for vue-tsc --noEmit --watch
    function getBindAndCheckDiagnostics(sourceFile, cancellationToken) {
        return getSourceFileDiagnosticsWorker(sourceFile, cancellationToken, 'getBindAndCheckDiagnostics');
    }
    // for vue-tsc --noEmit
    function getSyntacticDiagnostics(sourceFile, cancellationToken) {
        return getSourceFileDiagnosticsWorker(sourceFile, cancellationToken, 'getSyntacticDiagnostics');
    }
    function getSemanticDiagnostics(sourceFile, cancellationToken) {
        return getSourceFileDiagnosticsWorker(sourceFile, cancellationToken, 'getSemanticDiagnostics');
    }
    function getSourceFileDiagnosticsWorker(sourceFile, cancellationToken, api) {
        var _a, _b, _c;
        if (sourceFile) {
            const [virtualFile, source] = core.virtualFiles.getVirtualFile(sourceFile.fileName);
            if (virtualFile && source) {
                if (!virtualFile.capabilities.diagnostic)
                    return [];
                const errors = transformDiagnostics((_b = (_a = ls.getProgram()) === null || _a === void 0 ? void 0 : _a[api](sourceFile, cancellationToken)) !== null && _b !== void 0 ? _b : []);
                return errors;
            }
        }
        return transformDiagnostics((_c = getProgram()[api](sourceFile, cancellationToken)) !== null && _c !== void 0 ? _c : []);
    }
    function getGlobalDiagnostics(cancellationToken) {
        var _a;
        return transformDiagnostics((_a = getProgram().getGlobalDiagnostics(cancellationToken)) !== null && _a !== void 0 ? _a : []);
    }
    function emit(targetSourceFile, _writeFile, cancellationToken, emitOnlyDtsFiles, customTransformers) {
        var _a;
        const scriptResult = getProgram().emit(targetSourceFile, ((_a = core.typescript.languageServiceHost.writeFile) !== null && _a !== void 0 ? _a : ts.sys.writeFile), cancellationToken, emitOnlyDtsFiles, customTransformers);
        return {
            emitSkipped: scriptResult.emitSkipped,
            emittedFiles: scriptResult.emittedFiles,
            diagnostics: transformDiagnostics(scriptResult.diagnostics),
        };
    }
    // transform
    function transformDiagnostics(diagnostics) {
        var _a, _b, _c, _d;
        const result = [];
        for (const diagnostic of diagnostics) {
            if (diagnostic.file !== undefined
                && diagnostic.start !== undefined
                && diagnostic.length !== undefined) {
                const [virtualFile, source] = core.virtualFiles.getVirtualFile(diagnostic.file.fileName);
                if (virtualFile && source) {
                    if (((_b = (_a = core.typescript.languageServiceHost).fileExists) === null || _b === void 0 ? void 0 : _b.call(_a, source.fileName)) === false)
                        continue;
                    for (const [sourceFileName, map] of core.virtualFiles.getMaps(virtualFile)) {
                        if (sourceFileName !== source.fileName)
                            continue;
                        for (const start of map.toSourceOffsets(diagnostic.start)) {
                            if (!start[1].data.diagnostic)
                                continue;
                            for (const end of map.toSourceOffsets(diagnostic.start + diagnostic.length, true)) {
                                if (!end[1].data.diagnostic)
                                    continue;
                                onMapping(diagnostic, source.fileName, start[0], end[0], source.snapshot.getText(0, source.snapshot.getLength()));
                                break;
                            }
                            break;
                        }
                    }
                }
                else {
                    if (((_d = (_c = core.typescript.languageServiceHost).fileExists) === null || _d === void 0 ? void 0 : _d.call(_c, diagnostic.file.fileName)) === false)
                        continue;
                    onMapping(diagnostic, diagnostic.file.fileName, diagnostic.start, diagnostic.start + diagnostic.length, diagnostic.file.text);
                }
            }
            else if (diagnostic.file === undefined) {
                result.push(diagnostic);
            }
        }
        return result;
        function onMapping(diagnostic, fileName, start, end, docText) {
            var _a;
            let file = fileName === ((_a = diagnostic.file) === null || _a === void 0 ? void 0 : _a.fileName)
                ? diagnostic.file
                : undefined;
            if (!file) {
                if (docText === undefined) {
                    const snapshot = core.typescript.languageServiceHost.getScriptSnapshot(fileName);
                    if (snapshot) {
                        docText = snapshot.getText(0, snapshot.getLength());
                    }
                }
                else {
                    let scriptTarget = ts.ScriptTarget.JSON;
                    if (fileName.endsWith('.js')
                        || fileName.endsWith('.ts')
                        || fileName.endsWith('.jsx')
                        || fileName.endsWith('.tsx')
                        || fileName.endsWith('.mjs')
                        || fileName.endsWith('.mts')
                        || fileName.endsWith('.cjs')
                        || fileName.endsWith('.cts')) {
                        scriptTarget = ts.ScriptTarget.Latest;
                    }
                    file = ts.createSourceFile(fileName, docText, scriptTarget);
                }
            }
            const newDiagnostic = Object.assign(Object.assign({}, diagnostic), { file, start: start, length: end - start });
            const relatedInformation = diagnostic.relatedInformation;
            if (relatedInformation) {
                newDiagnostic.relatedInformation = transformDiagnostics(relatedInformation);
            }
            result.push(newDiagnostic);
        }
    }
}
exports.getProgram = getProgram;
//# sourceMappingURL=getProgram.js.map