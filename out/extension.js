"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const path_1 = require("path");
const vscode = __importStar(require("vscode"));
function activate(context) {
    const base = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
    // const path = normalize(resolve(base, './index.html'))
    //   .replace(/^([a-z]):/i, (_,$1:string) => `${$1.toUpperCase()}:`);
    const path = (0, path_1.normalize)((0, path_1.resolve)(base, './index.html'))
        .replace(/^([a-z]):/i, (_, $1) => `${$1.toLowerCase()}:`);
    const w = vscode.workspace.createFileSystemWatcher(path);
    w.onDidCreate(() => vscode.window.showInformationMessage(path));
    w.onDidChange(() => vscode.window.showInformationMessage(path));
    const disposable = vscode.commands.registerCommand('repro-diver-letter.helloWorld', () => {
        vscode.window.showInformationMessage(`${path}`);
    });
    context.subscriptions.push(disposable);
}
// This method is called when your extension is deactivated
function deactivate() { }
//# sourceMappingURL=extension.js.map