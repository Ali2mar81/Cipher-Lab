# Classical Cipher Lab 🔐

> An interactive playground for learning and experimenting with classical cryptography algorithms.

**Classical Cipher Lab** is a small educational cryptography project built to understand how classical encryption algorithms work — not only by using them, but by implementing them, analyzing their mathematical foundations, and exploring how they can be attacked.

🌐 **Live Preview:**
https://caesar-cipher-algorithem.netlify.app/

> **Note:** If you are accessing the preview from Iran, you may need to use a VPN.

---

## ✨ Features

* 🔐 Interactive classical cipher playground
* 🔄 Switch between multiple cipher algorithms
* 🧮 Real-time encryption and decryption
* 🎛️ Interactive cipher key controls
* 🔤 Alphabet transformation visualization
* 📋 Copy encrypted/decrypted text
* 🧹 Clear input/output
* 📊 Character counting
* 🌙 Minimal dark cryptography-inspired interface
* ✨ Smooth UI transitions and animations
* 📱 Responsive design

### Currently Supported

| Cipher        | Encryption | Decryption | Interactive Key |
| ------------- | ---------- | ---------- | --------------- |
| Caesar Cipher | ✅          | ✅          | Shift           |
| Affine Cipher | ✅          | ✅          | `a`, `b`        |

---

# 🔐 Supported Ciphers

## 1. Caesar Cipher

The Caesar Cipher is one of the simplest substitution ciphers.

Each letter is shifted by a fixed number of positions in the alphabet.

### Encryption

[
E(x) = (x + k) \mod 26
]

### Decryption

[
D(x) = (x - k) \mod 26
]

Where:

* `x` = numerical representation of the plaintext character
* `k` = shift key
* `26` = size of the English alphabet

### Example

With:

```text
Key = 3
```

We get:

```text
A → D
B → E
C → F
```

So:

```text
HELLO
```

becomes:

```text
KHOOR
```

### Key Space

For the English alphabet:

```text
k ∈ {0, 1, 2, ..., 25}
```

There are only **26 possible keys**.

This makes Caesar Cipher vulnerable to a simple **brute-force attack**.

---

# 2. Affine Cipher

The Affine Cipher is a monoalphabetic substitution cipher based on a mathematical transformation.

It uses two keys:

```text
a
b
```

### Encryption

[
E(x) = (ax + b) \mod 26
]

### Decryption

[
D(x) = a^{-1}(x-b) \mod 26
]

Where:

* `x` = numerical representation of the character
* `a` = multiplicative key
* `b` = additive key
* `a⁻¹` = modular multiplicative inverse of `a` modulo 26

### Important Constraint

The value of `a` must be relatively prime to `26`.

In other words:

[
gcd(a,26)=1
]

Valid values are:

```text
1, 3, 5, 7, 9, 11,
15, 17, 19, 21, 23, 25
```

This condition is necessary because the decryption operation requires a modular inverse.

### Example

Suppose:

```text
a = 5
b = 8
```

For the letter:

```text
A = 0
```

Encryption becomes:

[
E(0)=(5(0)+8)\mod26
]

[
E(0)=8
]

Therefore:

```text
A → I
```

---

# 🧠 Cryptography Learning Model

The main goal of this project is not simply to build working ciphers.

For each classical cipher, the project studies the algorithm from several perspectives.

### 1. Scenario Model

Who communicates with whom?

Example:

```text
Alice                         Bob
  |                             |
  |       Encrypted Message     |
  | --------------------------> |
  |                             |
```

The sender encrypts the plaintext before sending it through an insecure communication channel.

---

### 2. Threat Model

We assume an attacker can observe the communication channel.

For example:

```text
Alice ────────► Attacker ────────► Bob
                 │
                 └── observes ciphertext
```

The attacker may attempt to recover:

* the plaintext
* the encryption key
* information about the encryption process

---

### 3. Correctness

For a correct encryption/decryption system:

[
D(E(m)) = m
]

where:

* `m` = plaintext
* `E` = encryption
* `D` = decryption

The project verifies this property mathematically and through implementation.

---

### 4. Security Analysis

Each cipher is analyzed according to questions such as:

* How large is the key space?
* Can an attacker brute-force the key?
* Does the cipher preserve statistical information?
* Is frequency analysis possible?
* Does the cipher provide semantic security?
* What information does the ciphertext reveal?

---

### 5. Attacks

The project will progressively implement attacks against the classical ciphers.

Examples include:

```text
Brute Force
     ↓
Frequency Analysis
     ↓
Known-Plaintext Analysis
     ↓
Cipher-Specific Attacks
```

The goal is to understand **why** classical ciphers are insecure, rather than simply memorizing that they are insecure.

---

# 🏗️ Project Structure

```text
classical-cipher-lab/
│
├── index.html
├── style.css
├── demo.ts
│
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── vite.config.ts
│
└── README.md
```

---

# 🛠️ Technologies

* **HTML5**
* **CSS3**
* **TypeScript**
* **Vite**
* **Node.js**
* **pnpm**
* **Netlify**

The project intentionally keeps the frontend lightweight so the cryptographic algorithms remain easy to inspect and understand.

---

# 🚀 Getting Started

## 1. Clone the repository

```bash
git clone <repository-url>
```

Then enter the project:

```bash
cd classical-cipher-lab
```

---

## 2. Install dependencies

Using pnpm:

```bash
pnpm install
```

---

## 3. Start the development server

```bash
pnpm dev
```

Vite will start the development server.

Open the local URL shown in your terminal, usually:

```text
http://localhost:5173/
```

---

## 4. Build the project

```bash
pnpm build
```

---

## 5. Preview the production build

```bash
pnpm preview
```

---

# 🧪 Example

### Caesar Cipher

Input:

```text
HELLO WORLD
```

Key:

```text
3
```

Output:

```text
KHOOR ZRUOG
```

---

### Affine Cipher

Input:

```text
HELLO
```

Keys:

```text
a = 5
b = 8
```

Encryption:

[
E(x) = (5x + 8) \mod 26
]

The application calculates the transformation for every alphabetic character and preserves spaces and other non-alphabetic characters.

---

# 🔍 Implementation Philosophy

The algorithms are implemented manually instead of relying on cryptography libraries.

For example, the Affine Cipher uses:

```ts
function gcd(a: number, b: number): number
```

to verify that the multiplicative key is valid.

The modular inverse is calculated using:

```ts
function modularInverse(
    a: number,
    modulus: number
): number
```

This keeps the mathematical structure of the algorithm visible in the source code.

---

# ⚔️ Security Level

These algorithms are intended for **educational purposes only**.

They should **not** be used to protect real-world sensitive information.

### Caesar Cipher

Its security is extremely limited because the key space contains only:

```text
26 possible keys
```

An attacker can simply try every possible shift.

### Affine Cipher

The Affine Cipher has a larger key space than Caesar Cipher, but it remains a classical monoalphabetic substitution cipher.

For the English alphabet:

```text
a → 12 valid values
b → 26 possible values
```

Therefore, the number of valid key combinations is:

[
12 \times 26 = 312
]

A modern attacker can exhaust this key space very easily.

---

# 📚 Learning Roadmap

The project will gradually expand into a complete classical cryptography laboratory.

### Completed

* [ ] Caesar Cipher
* [ ] Caesar encryption
* [ ] Caesar decryption
* [ ] Caesar interactive UI
* [ ] Affine Cipher
* [ ] Affine encryption
* [ ] Affine decryption
* [ ] Affine key validation
* [ ] Caesar / Affine cipher switcher

### Next

* [ ] Caesar brute-force attacker
* [ ] Affine brute-force attacker
* [ ] Key-space visualization
* [ ] Frequency analysis
* [ ] Monoalphabetic Substitution Cipher
* [ ] Vigenère Cipher
* [ ] Playfair Cipher
* [ ] Hill Cipher
* [ ] Cryptanalysis playground
* [ ] Attack visualizations
* [ ] Security analysis for every cipher

---

# 🎓 Educational Goals

This project is being developed as a hands-on study of classical cryptography.

For every cipher, the goal is to understand:

```text
Algorithm
   ↓
Mathematical Model
   ↓
Implementation
   ↓
Correctness
   ↓
Scenario Model
   ↓
Threat Model
   ↓
Security Analysis
   ↓
Attack
   ↓
Cryptanalysis
```

Rather than treating cryptography as a collection of formulas, the project focuses on understanding **how the mathematical design affects security**.

---

# ⚠️ Security Notice

This project is educational.

Classical ciphers such as Caesar and Affine are **not secure cryptographic algorithms for modern applications**.

Do not use them for:

* passwords
* authentication
* confidential communication
* financial information
* personal data
* production security systems

Modern applications should use well-studied cryptographic primitives and protocols such as AES-GCM, ChaCha20-Poly1305, and modern public-key cryptography.

---

# 👨‍💻 Author

**Ali Ebrahimi**

Master's Degree in Computer Science

Interested in:

* Cryptography
* Computer Science
* Front-End Development
* UI/UX Design
* Privacy-Preserving AI
* Interactive Learning Tools

---

## ⭐ Project Philosophy

> **Don't just learn how to encrypt. Learn how to break it.**

The purpose of Classical Cipher Lab is to make cryptography interactive — implement the algorithm, understand the mathematics, analyze its security, and then attack it.

That process turns cryptography from a collection of formulas into something you can actually understand and experiment with.
