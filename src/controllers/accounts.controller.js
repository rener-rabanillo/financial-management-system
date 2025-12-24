import path from "node:path";

const __dirname = import.meta.dirname;

export function serveAccountsPage(req, res) {
    res.sendFile(
        path.join(__dirname, "..", "views", "app", "accounts.html")
    );
}