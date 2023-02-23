const vscode = require("vscode");

/**
 * @param {vscode.ExtensionContext} context
 */

function activate(context) {
    context.subscriptions.push(
        vscode.commands.registerCommand("forestify.runForest", () => {
            panal.webview.html = getPanelContent();
            panal.reveal();
        })
    );
}

const panal = vscode.window.createWebviewPanel(
    "forestify",
    "Forestify",
    vscode.ViewColumn.One
);

const getPanelContent = () => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Forestify</title>
    </head>
    <body>
        <h1>Hello World</h1>
    </body>
    </html>`;
};

function deactivate() {}

module.exports = {
    activate,
    deactivate,
};
