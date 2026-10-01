# 🔐 Caesar Cipher — Classical Cryptography Lab

A small, interactive implementation of the **Caesar Cipher**, one of the oldest and simplest classical substitution ciphers.

This project is designed not only as a working encryption/decryption tool, but also as part of a **Classical Cryptography learning journey**, where cryptographic algorithms are studied from both an implementation and security perspective.

> **Local Data. Classical Cryptography.**

---

## 🌐 Live Preview

You can try the project here:

**https://caesar-cipher-algorithem.netlify.app/**

> 🇮🇷 **For users in Iran:**
> If the preview is not accessible, please use a **VPN** to access the deployed website.

---

## ✨ Features

* 🔐 Caesar Cipher encryption
* 🔓 Caesar Cipher decryption
* 🎚️ Interactive shift/key selector
* ⚡ Real-time encryption and decryption
* 🔤 Alphabet transformation visualization
* 📋 Copy ciphertext to clipboard
* 🧹 Clear input/output
* 🔢 Character counter
* 📱 Responsive design
* 🌙 Minimal dark-themed interface
* ✨ Smooth UI animations
* 🧪 Designed for cryptography experimentation and learning

---

## 🧠 What is Caesar Cipher?

The Caesar Cipher is a **substitution cipher** in which every letter of the plaintext is shifted by a fixed number of positions in the alphabet.

For example, with a shift of `3`:

```text
Plain alphabet:

A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

Cipher alphabet:

D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
```

Therefore:

```text
HELLO
```

becomes:

```text
KHOOR
```

The mathematical transformation can be represented as:

```text
E(x) = (x + k) mod 26
```

where:

* `x` = numerical representation of the plaintext character
* `k` = secret shift/key
* `26` = size of the English alphabet

For decryption:

```text
D(x) = (x - k) mod 26
```

---

## 🛠️ Technologies Used

This project is intentionally kept lightweight and focuses on fundamental web technologies.

### Frontend

* **HTML5**
* **CSS3**
* **TypeScript**

### Development

* **Vite**
* **Node.js**
* **pnpm**

### Deployment

* **Netlify**

---

## 📁 Project Structure

```text
ceasar-chiper/
│
├── index.html
├── style.css
├── demo.ts
│
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
│
└── README.md
```

### `index.html`

Contains the structure of the Caesar Cipher interface, including:

* Encryption/decryption controls
* Text input/output
* Shift selector
* Alphabet visualization
* Copy and clear controls

### `style.css`

Responsible for:

* Dark UI
* Responsive layout
* Animations
* Interactive states
* Typography
* Components styling

### `demo.ts`

Contains the TypeScript logic for:

* Caesar Cipher encryption
* Caesar Cipher decryption
* Shift handling
* DOM interaction
* Real-time output
* Copy functionality
* Alphabet visualization

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Enter the project

```bash
cd ceasar-chiper
```

### 3. Install dependencies

```bash
pnpm install
```

### 4. Start the development server

```bash
pnpm dev
```

The application should be available at:

```text
http://localhost:5173
```

---

## 🔐 Example

### Encryption

```text
Input:
HELLO WORLD

Key:
3

Output:
KHOOR ZRUOG
```

### Decryption

```text
Input:
KHOOR ZRUOG

Key:
3

Output:
HELLO WORLD
```

---

## 🧪 Cryptography Learning Goals

This project is part of a larger study of **classical cryptography algorithms**.

For each algorithm, the goal is to understand more than just how to implement it.

The learning process includes:

### 1. Scenario Model

Understanding the communication scenario and the participants involved.

```text
Alice  →  Encryption  →  Ciphertext  →  Decryption  →  Bob
                                      ↑
                                   Attacker
```

### 2. Threat Model

Understanding what an attacker can observe, control, or attempt to recover.

For Caesar Cipher, an attacker may observe the ciphertext and attempt to determine the secret key.

### 3. Correctness

Understanding why decryption correctly recovers the original plaintext.

For example:

```text
E(x) = (x + k) mod 26

D(E(x)) = ((x + k) - k) mod 26

       = x mod 26

       = x
```

### 4. Security

Studying how difficult it is for an attacker to break the cipher.

Caesar Cipher has only:

```text
26 possible shifts
```

which makes exhaustive search extremely easy.

### 5. Attacks

The next stage of this project is implementing a **Brute-Force Attacker** that tries every possible Caesar key:

```text
Key 0 → ...
Key 1 → ...
Key 2 → ...
...
Key 25 → ...
```

This demonstrates why Caesar Cipher is not considered secure for modern communication.

---

## ⚠️ Security Notice

Caesar Cipher is a **classical educational cipher** and should **not** be used to protect real-world sensitive information.

Its small key space and simple substitution structure make it vulnerable to attacks such as:

* Brute-force attack
* Frequency analysis
* Known-plaintext attacks

The purpose of this project is **education and experimentation**, not real-world data protection.

---

## 🎯 Future Improvements

Planned improvements for the cryptography lab include:

* [ ] Caesar Cipher brute-force attacker
* [ ] Automatic attack visualization
* [ ] Frequency analysis
* [ ] Attack/threat-model visualization
* [ ] Affine Cipher
* [ ] Monoalphabetic substitution cipher
* [ ] Vigenère Cipher
* [ ] Playfair Cipher
* [ ] Hill Cipher
* [ ] Classical cryptanalysis demonstrations

---

## 👨‍💻 Author

**Ali Ebrahimi**

Master's Degree in Computer Science

Interested in:

* Cryptography
* Computer Science
* Front-End Development
* UI/UX Design
* Privacy-Preserving AI
* Federated Learning

---

## 📜 License

This project is created for **educational and learning purposes**.

Feel free to study, modify, and experiment with the implementation.
