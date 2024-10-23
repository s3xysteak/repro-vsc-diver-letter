import { normalize, resolve } from 'path';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const base = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath!;
  
  // const path = normalize(resolve(base, './index.html'))
  //   .replace(/^([a-z]):/i, (_,$1:string) => `${$1.toUpperCase()}:`);
  const path = normalize(resolve(base, './index.html'))
    .replace(/^([a-z]):/i, (_,$1:string) => `${$1.toLowerCase()}:`);

  const w =  vscode.workspace.createFileSystemWatcher(path);
  w.onDidCreate(() => vscode.window.showInformationMessage(path));
  w.onDidChange(() => vscode.window.showInformationMessage(path));

	const disposable = vscode.commands.registerCommand('repro-diver-letter.helloWorld', () => {
		vscode.window.showInformationMessage(`${path}`);
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
