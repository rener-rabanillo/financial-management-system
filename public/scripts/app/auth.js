"use strict";

function verifyAuthorization() {
    try {
        const response = fetch("/auth/verify", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = response.json();

        return data;

    } catch (error) {

    }
}