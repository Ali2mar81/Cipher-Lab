/**
 * Users are able to comment code for UI section and uncomment the codes of below 
 * then run this command on terminal: `pnpm start` 
 * to see action in terminal
 * without install dependencies 
 */

////////////// Caesar Cipher ////////////////

// import { caesarBruteForce } from "./brute-force.js";
// import { encrypt, decrypt } from "./ceasar.js";

// const message = "Hello, I'm Ali Ebrahimi";
// const key = 5;

// const encrypted = encrypt(message, key);
// const decrypted = decrypt(encrypted, key);

// console.log("Original :", message);
// console.log("Encrypted:", encrypted);
// console.log("Decrypted:", decrypted);

// const candidates = caesarBruteForce(encrypted);

// for (const candidate of candidates) {
//     console.log(
//         `Key ${candidate.key.toString().padStart(2, " ")} → ${candidate.plaintext}`
//     );
// }

////////////// Affine Cipher ////////////////
/*
import { encrypt, decrypt } from "./affine.js";
import { affineBruteForce } from "./brute-force.js";

const message = "HELLO WORLD";

const a = 5;
const b = 8;

const ciphertext = encrypt(message, a, b);

console.log("Plaintext :", message);
console.log("Ciphertext:", ciphertext);

const plaintext = decrypt(ciphertext, a, b);

console.log("Decrypted :", plaintext);

const candidates = affineBruteForce(ciphertext);

for (const candidate of candidates) {
    console.log(
        `a=${candidate.a}, b=${candidate.b} → ${candidate.plaintext}`
    );
}
*/
///////////////////// these code apply for connected UI /////////////////////////
/**
 * These codes write for UI section and users need to install dependencies with 
 * `pnpm inatall`
 * then run project with `pnpm dev`  
 */
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

type Mode = "encrypt" | "decrypt";

let mode: Mode = "encrypt";

type CipherType = "caesar" | "affine";

let cipherType: CipherType = "caesar";

// --------------------------------
// Affine Cipher
// --------------------------------

function gcd(
    a: number,
    b: number
): number {

    while (b !== 0) {

        const remainder = a % b;

        a = b;
        b = remainder;
    }

    return Math.abs(a);
}


function modularInverse(
    a: number,
    modulus: number
): number {

    for (
        let x = 1;
        x < modulus;
        x++
    ) {

        if ((a * x) % modulus === 1) {
            return x;
        }
    }

    return -1;
}


function affineCipher(
    text: string,
    a: number,
    b: number,
    mode: Mode
): string {

    /*
     * a must be coprime with 26.
     */

    if (gcd(a, 26) !== 1) {

        throw new Error(
            "Invalid multiplicative key."
        );
    }


    /*
     * Encryption:
     *
     * E(x) = (ax + b) mod 26
     */

    if (mode === "encrypt") {

        return [...text]
            .map((char) => {

                const upper =
                    char.toUpperCase();

                const index =
                    alphabet.indexOf(upper);

                if (index === -1) {
                    return char;
                }

                const encrypted =
                    (a * index + b) % 26;

                const result =
                    alphabet[encrypted];

                return char ===
                    char.toLowerCase()
                    ? result?.toLowerCase()
                    : result;
            })
            .join("");
    }


    /*
     * Decryption:
     *
     * D(x) = a⁻¹(x - b) mod 26
     */

    const inverse =
        modularInverse(a, 26);


    return [...text]
        .map((char) => {

            const upper =
                char.toUpperCase();

            const index =
                alphabet.indexOf(upper);

            if (index === -1) {
                return char;
            }

            const decrypted =
                (
                    inverse *
                    (index - b)
                ) % 26;

            const normalized =
                (decrypted + 26) % 26;

            const result =
                alphabet[normalized];

            return char ===
                char.toLowerCase()
                ? result?.toLowerCase()
                : result;
        })
        .join("");
}








function caesarCipher(
    text: string,
    shift: number,
    mode: Mode
): string {

    const actualShift =
        mode === "encrypt"
            ? shift
            : -shift;

    return [...text]
        .map((char) => {

            const upperChar = char.toUpperCase();

            const index =
                alphabet.indexOf(upperChar);

            if (index === -1) {
                return char;
            }

            const newIndex =
                (index + actualShift + 26) % 26;

            const result =
                alphabet[newIndex];

            return char === char.toLowerCase()
                ? result?.toLowerCase()
                : result;
        })
        .join("");
}


function initializeApp(): void {
    const caesarTab =
        document.querySelector<HTMLButtonElement>(
            "#caesarTab"
        )!;

    const affineTab =
        document.querySelector<HTMLButtonElement>(
            "#affineTab"
        )!;

    const cipherSwitch =
        document.querySelector<HTMLDivElement>(
            ".cipher-switch"
        )!;

    const caesarControls =
        document.querySelector<HTMLDivElement>(
            "#caesarControls"
        )!;

    const affineControls =
        document.querySelector<HTMLDivElement>(
            "#affineControls"
        )!;

    const aInput =
        document.querySelector<HTMLSelectElement>(
            "#aInput"
        )!;

    const bInput =
        document.querySelector<HTMLSelectElement>(
            "#bInput"
        )!;

    const previewTitle =
        document.querySelector<HTMLElement>(
            "#previewTitle"
        )!;

    const previewFormula =
        document.querySelector<HTMLElement>(
            "#previewFormula"
        )!;

    const inputText =
        document.querySelector<HTMLTextAreaElement>(
            "#inputText"
        )!;

    const outputText =
        document.querySelector<HTMLTextAreaElement>(
            "#outputText"
        )!;

    const shiftInput =
        document.querySelector<HTMLInputElement>(
            "#shiftInput"
        )!;

    const shiftValue =
        document.querySelector<HTMLSpanElement>(
            "#shiftValue"
        )!;

    const inputCount =
        document.querySelector<HTMLSpanElement>(
            "#inputCount"
        )!;

    const encryptBtn =
        document.querySelector<HTMLButtonElement>(
            "#encryptBtn"
        )!;

    const decryptBtn =
        document.querySelector<HTMLButtonElement>(
            "#decryptBtn"
        )!;

    const clearBtn =
        document.querySelector<HTMLButtonElement>(
            "#clearBtn"
        )!;

    const copyBtn =
        document.querySelector<HTMLButtonElement>(
            "#copyBtn"
        )!;

    const alphabetRow =
        document.querySelector<HTMLDivElement>(
            "#alphabetRow"
        )!;

    const previewLetter =
        document.querySelector<HTMLElement>(
            "#previewLetter"
        )!;


    function updateAlphabet(shift: number): void {

        alphabetRow.innerHTML = "";

        [...alphabet].forEach(
            (letter, index) => {

                const element =
                    document.createElement("span");

                element.className = "letter";

                element.textContent = letter;

                if (index === shift) {
                    element.classList.add(
                        "active"
                    );
                }

                alphabetRow.appendChild(
                    element
                );
            }
        );
    }



    function updateCipher(): void {

        //     if (cipherType === "caesar") {

        //         const shift =
        //             Number(shiftInput.value);

        //         shiftValue.textContent =
        //             String(shift);

        //         outputText.value =
        //             caesarCipher(
        //                 inputText.value,
        //                 shift,
        //                 mode
        //             );

        //         previewLetter.textContent =
        //             alphabet[shift]!;

        //         updateAlphabet(shift);

        //         // Update alphabet preview
        // updateAlphabet(shift);

        // // Update transformation preview
        // previewTitle.textContent =
        //     "Alphabet transformation";

        // previewFormula.innerHTML =
        //     `A → <strong>${alphabet[shift]}</strong>`;

        //         return;
        //     }


        // ----------------------------
        // Affine
        // ----------------------------

        if (cipherType === "caesar") {

            const shift =
                Number(shiftInput.value);

            // Update key display
            shiftValue.textContent =
                String(shift);

            // Encrypt / decrypt
            outputText.value =
                caesarCipher(
                    inputText.value,
                    shift,
                    mode
                );

            // Update alphabet preview
            updateAlphabet(shift);

            // Update transformation preview
            previewTitle.textContent =
                "Alphabet transformation";

            previewFormula.innerHTML =
                `A → <strong>${alphabet[shift]}</strong>`;

            return;
        }

        const a =
            Number(aInput.value);

        const b =
            Number(bInput.value);


        outputText.value =
            affineCipher(
                inputText.value,
                a,
                b,
                mode
            );


        /*
         * For Affine we don't use
         * the Caesar shift preview.
         */

        previewLetter.textContent =
            alphabet[
            (a * 0 + b) % 26
            ]!;

        previewTitle.textContent =
            "Affine transformation";

        previewFormula.innerHTML =
            `E(x) = (${a}x + ${b}) mod 26`;
        updateAlphabet(b);
    }

    function setCipher(
        newCipher: CipherType
    ): void {

        cipherType = newCipher;


        const isCaesar =
            cipherType === "caesar";


        caesarTab.classList.toggle(
            "active",
            isCaesar
        );

        affineTab.classList.toggle(
            "active",
            !isCaesar
        );


        cipherSwitch.classList.toggle(
            "affine-active",
            !isCaesar
        );


        caesarControls.classList.toggle(
            "hidden",
            !isCaesar
        );

        affineControls.classList.toggle(
            "hidden",
            isCaesar
        );


        updateCipher();
    }


    function setMode(
        newMode: Mode
    ): void {

        mode = newMode;

        encryptBtn.classList.toggle(
            "active",
            mode === "encrypt"
        );

        decryptBtn.classList.toggle(
            "active",
            mode === "decrypt"
        );

        updateCipher();
    }


    inputText.addEventListener(
        "input",
        () => {

            inputCount.textContent =
                `${inputText.value.length} characters`;

            updateCipher();
        }
    );
    caesarTab.addEventListener(
        "click",
        () => setCipher("caesar")
    );


    affineTab.addEventListener(
        "click",
        () => setCipher("affine")
    );
    aInput.addEventListener(
        "change",
        updateCipher
    );


    bInput.addEventListener(
        "change",
        updateCipher
    );

    shiftInput.addEventListener(
        "input",
        updateCipher
    );


    encryptBtn.addEventListener(
        "click",
        () => setMode("encrypt")
    );


    decryptBtn.addEventListener(
        "click",
        () => setMode("decrypt")
    );


    clearBtn.addEventListener(
        "click",
        () => {

            inputText.value = "";

            outputText.value = "";

            inputCount.textContent =
                "0 characters";

            updateCipher();

            inputText.focus();
        }
    );


    copyBtn.addEventListener(
        "click",
        async () => {

            if (!outputText.value) {
                return;
            }

            await navigator.clipboard.writeText(
                outputText.value
            );

            copyBtn.textContent =
                "Copied!";

            copyBtn.classList.add(
                "copied"
            );

            setTimeout(() => {

                copyBtn.textContent =
                    "Copy";

                copyBtn.classList.remove(
                    "copied"
                );

            }, 1200);
        }
    );


    updateCipher();
}


initializeApp();