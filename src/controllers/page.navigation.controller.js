import path from "node:path";

const __dirname = import.meta.dirname;

export function serveHomePage(req, res) {
    const token = req.cookies.sid;

    /*
    if (!token) {
        return res.sendFile(
            path.join(__dirname, "..", "views", "website", "index.html")
        );
    }
    */
    
    res.sendFile(
        path.join(__dirname, "..", "views", "app", "dashboard.html")
    );
}

export function serveAboutPage(req, res) {
    res.sendFile(
        path.join(__dirname, "..", "views", "website", "about.html")
    );
}

export function serveContactPage(req, res) {
    res.sendFile(
        path.join(__dirname, "..", "views", "website", "contact.html")
    );
}

export function serveLoginPage(req, res) {
    res.sendFile(
        path.join(__dirname, "..", "views", "website", "login.html")
    );
}

export function serveSignupPage(req, res) {
    res.sendFile(
        path.join(__dirname, "..", "views", "website", "signup.html")
    );
}

export function serveBudgetPage(req, res) {
    res.sendFile(
        path.join(__dirname, "..", "views", "app", "budgets.html")
    );
}

export function serveTransactionsPage(req, res) {
    res.sendFile(
        path.join(__dirname, "..", "views", "app", "transactions.html")
    );
}

export function serveAccountsPage(req, res) {
    res.sendFile(
        path.join(__dirname, "..", "views", "app", "accounts.html")
    );
}