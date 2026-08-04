const vscode = require("vscode");

const provider = vscode.languages.registerCompletionItemProvider(
    "quant-lang",
    {
        provideCompletionItems(document, position) {

            const line = document.lineAt(position);
            const text = line.text.substring(0, position.character);

            const attributes = [
                "entry",
                "inline",
                "export",
                "extern"
            ].map(attribute => {
                return new vscode.CompletionItem(
                    attribute,
                    vscode.CompletionItemKind.Keyword
                );
            });


            if (text.endsWith("@")) {
                return attributes;
            }


            const items = [];


            const types = [
                "i8",
                "i16",
                "i32",
                "i64",
                "u8",
                "u16",
                "u32",
                "u64",
                "f32",
                "f64",
                "bool",
                "char",
                "str",
                "void"
            ];


            for (const type of types) {
                items.push(
                    new vscode.CompletionItem(
                        type,
                        vscode.CompletionItemKind.TypeParameter
                    )
                );
            }


            const keywords = [
                "func",
                "struct",
                "enum",
                "extern",
                "return",
                "if",
                "else",
                "while",
                "using",
                "load",
                "break",
                "continue",
                "switch",
                "case",
                "default"
            ];


            for (const keyword of keywords) {
                items.push(
                    new vscode.CompletionItem(
                        keyword,
                        vscode.CompletionItemKind.Keyword
                    )
                );
            }


            return items;
        }
    },
    "@"
);