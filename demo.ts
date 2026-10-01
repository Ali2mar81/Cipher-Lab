/**
 * Users are able to comment code for UI section and uncomment the codes of below 
 * then run this command on terminal: `pnpm start` 
 * to see action in terminal
 * without install dependencies 
 */ 

// import { bruteForce } from "./brute-force.js";
// import { encrypt, decrypt } from "./ceasar.js";

// const message = "Hello, I'm Ali Ebrahimi";
// const key = 5;

// const encrypted = encrypt(message, key);
// const decrypted = decrypt(encrypted, key);

// console.log("Original :", message);
// console.log("Encrypted:", encrypted);
// console.log("Decrypted:", decrypted);

// const candidates = bruteForce(encrypted);

// for (const candidate of candidates) {
//     console.log(
//         `Key ${candidate.key.toString().padStart(2, " ")} → ${candidate.plaintext}`
//     );
// }

///////////////////// these code apply for connected UI /////////////////////////
/**
 * These codes write for UI section and users need to install dependencies with 
 * `pnpm inatall`
 * then run project with `pnpm dev`  
 */
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

type Mode = "encrypt" | "decrypt";

let mode: Mode = "encrypt";


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

        const shift =
            Number(shiftInput.value);

        shiftValue.textContent =
            String(shift);

        outputText.value =
            caesarCipher(
                inputText.value,
                shift,
                mode
            );

        previewLetter.textContent =
            alphabet[shift]!;

        updateAlphabet(shift);
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