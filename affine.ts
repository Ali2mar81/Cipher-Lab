const ALPHABET_SIZE = 26;

function normalize(value: number): number {
    return ((value % ALPHABET_SIZE) + ALPHABET_SIZE) % ALPHABET_SIZE;
}

function gcd(a: number, b: number): number {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }

    return Math.abs(a);
}

function modInverse(a: number): number {
    a = normalize(a);

    for (let x = 1; x < ALPHABET_SIZE; x++) {
        if ((a * x) % ALPHABET_SIZE === 1) {
            return x;
        }
    }

    throw new Error(
        `${a} has no modular inverse modulo ${ALPHABET_SIZE}`
    );
}

function validateKey(a: number): void {
    if (gcd(a, ALPHABET_SIZE) !== 1) {
        throw new Error(
            `Invalid key: gcd(${a}, ${ALPHABET_SIZE}) must equal 1`
        );
    }
}

export function encrypt(
    text: string,
    a: number,
    b: number
): string {
    validateKey(a);

    return text
        .split("")
        .map((char) => {
            const code = char.charCodeAt(0);

            if (code >= 65 && code <= 90) {
                const x = code - 65;

                return String.fromCharCode(
                    normalize(a * x + b) + 65
                );
            }

            if (code >= 97 && code <= 122) {
                const x = code - 97;

                return String.fromCharCode(
                    normalize(a * x + b) + 97
                );
            }

            return char;
        })
        .join("");
}

export function decrypt(
    text: string,
    a: number,
    b: number
): string {
    validateKey(a);

    const inverse = modInverse(a);

    return text
        .split("")
        .map((char) => {
            const code = char.charCodeAt(0);

            if (code >= 65 && code <= 90) {
                const y = code - 65;

                return String.fromCharCode(
                    normalize(inverse * (y - b)) + 65
                );
            }

            if (code >= 97 && code <= 122) {
                const y = code - 97;

                return String.fromCharCode(
                    normalize(inverse * (y - b)) + 97
                );
            }

            return char;
        })
        .join("");
}