const ALPHABET_SIZE = 26;

function normalizeKey(key: number): number {
    return ((key % ALPHABET_SIZE) + ALPHABET_SIZE) % ALPHABET_SIZE;
}

export function encrypt(text: string, key: number): string {
    const normalizedKey = normalizeKey(key);

    return text
        .split("")
        .map((char) => {
            const code = char.charCodeAt(0);

            // Uppercase
            if (code >= 65 && code <= 90) {
                return String.fromCharCode(
                    ((code - 65 + normalizedKey) % 26) + 65
                );
            }

            // Lowercase
            if (code >= 97 && code <= 122) {
                return String.fromCharCode(
                    ((code - 97 + normalizedKey) % 26) + 97
                );
            }

            // Spaces, numbers, punctuation...
            return char;
        })
        .join("");
}

export function decrypt(text: string, key: number): string {
    return encrypt(text, -key);
}