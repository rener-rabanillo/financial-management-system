import crypto from "node:crypto";
import bcrypt from "bcrypt";
import { v7, parse, stringify } from "uuid";

export function generateToken() { return crypto.randomBytes(32).toString("hex") }

export function hashToken(token) { return crypto.createHash("sha256").update(token).digest("hex") }

export function generateUuid() { return v7() }

export function uuidToBinary(id) { return parse(id) }

export function binaryToUuid(binary) { return stringify(binary) }

export async function hashPassword(password) { return await bcrypt.hash(password, 10) }

export async function comparePassword(password, hashedPassword) { return await bcrypt.compare(password, hashedPassword) }