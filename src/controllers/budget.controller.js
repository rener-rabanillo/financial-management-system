import path from "node:path";

const __dirname = import.meta.dirname;

export function serveBudgetPage(req, res) {
    res.sendFile(
        path.join(__dirname, "..", "views", "app", "budget.html")
    );
}