import { decrypt } from "./ceasar.js";

export interface Candidate {
    key: number;
    plaintext: string;
}

export function bruteForce(ciphertext: string): Candidate[] {
    const candidates: Candidate[] = [];

    for (let key = 0; key < 26; key++) {
        candidates.push({
            key,
            plaintext: decrypt(ciphertext, key),
        });
    }

    return candidates;
}