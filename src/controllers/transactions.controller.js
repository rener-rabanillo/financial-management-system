import path from "node:path";

const __dirname = import.meta.dirname;

export function serveTransactionsPage(req, res) {
    res.sendFile(
        path.join(__dirname, "..", "views", "app", "transactions.html")
    );
}