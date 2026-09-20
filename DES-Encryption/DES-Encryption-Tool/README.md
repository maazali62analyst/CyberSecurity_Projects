# DES Encryption & Decryption Web App

A web application that encrypts and decrypts text using the **Data Encryption Standard (DES)**. Built by Maaz Ali as a university project for the Hacking Club at Grand Asian University Sialkot.

**Live demo:** _add your GitHub Pages link here_

## Features
- Encrypt any text with DES and get a Base64 result
- Decrypt DES-encrypted text back to plaintext with the same key
- Random key generator
- One-click copy for keys and results
- Info pages explaining how DES works (block cipher, 64-bit blocks, 16 rounds, 56-bit effective key)

## Tech Stack
HTML5, CSS3, JavaScript, [CryptoJS](https://cryptojs.gitbook.io/docs/), PHP (used during local development). All encryption runs **in your browser**; no text or keys are sent to a server.

## Run Locally
1. Download or clone the repo
2. Open `index.html` in any browser (or serve the folder with XAMPP / `python -m http.server`)

## Screenshots
_Add screenshots of the home page, the encrypt page and the decrypt page here._

## Security Note
DES is **obsolete**. Its 56-bit effective key can be brute-forced, and NIST withdrew it in favor of AES. This project is for **learning how symmetric block ciphers work**, not for protecting real data. CryptoJS also treats the key field as a passphrase and derives the actual DES key from it, so the generated hex string acts as a passphrase rather than a raw 64-bit key.

## What I Learned
Symmetric-key cryptography, block cipher concepts, key handling, client-side crypto with CryptoJS, and why algorithms get retired as computing power grows.

## Author
Maaz Ali
