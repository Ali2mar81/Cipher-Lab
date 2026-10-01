import { decrypt as caesarDec} from "./caesar.js";
import { decrypt as affineDec} from "./affine.js";
export interface CaesarCandidate {
    key: number;
    plaintext: string;
}

export function caesarBruteForce(ciphertext: string): CaesarCandidate[] {
    const candidates: CaesarCandidate[] = [];

    for (let key = 0; key < 26; key++) {
        candidates.push({
            key,
            plaintext: caesarDec(ciphertext, key),
        });
    }

    return candidates;
}

const VALID_A_VALUES = [
    1, 3, 5, 7, 9, 11,
    15, 17, 19, 21, 23, 25,
];

export interface AffineCandidate {
    a: number;
    b: number;
    plaintext: string;
}

export function affineBruteForce(
    ciphertext: string
): AffineCandidate[] {
    const candidates: AffineCandidate[] = [];

    for (const a of VALID_A_VALUES) {
        for (let b = 0; b < 26; b++) {
            candidates.push({
                a,
                b,
                plaintext: affineDec(ciphertext, a, b),
            });
        }
    }

    return candidates;
}