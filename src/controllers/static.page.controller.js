import path from "node:path";

const __dirname = import.meta.dirname;

export function serveHomePage(req, res) {
    const sessionToken = req.cookies.session_token;

    if (!sessionToken) {
        return res.sendFile(
            path.join(__dirname, "..", "views", "website", "index.html")
        );
    }
    
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