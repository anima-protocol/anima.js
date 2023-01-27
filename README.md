<h1 align="center">
    <img src="./img/anima-dark-logo.png#gh-light-mode-only" alt="Anima logo" />
    <img src="./img/anima-logo.png#gh-dark-mode-only" alt="Anima logo" />
    <br />
    JavaScript Implementation
    <br />
    <br />
</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/@anima-protocol/anima"><img src="https://img.shields.io/npm/v/@anima-protocol/anima.svg" alt="npm version"></a>
</p>

## Anima protocol implementation in JavaScript

This module implements the [anima protocol](https://anima.io/about/the-protocol/) client side, allowing you to generate issuing and sharing request in the browser or in NodeJS.

## Install

Anima.js can be installed through the npm registry:

```bash
npm install @anima-protocol/anima
```

Or with yarn:

```bash
yarn add @anima-protocol/anima
```

## Create an issuing request

Creating an issuing request is as simple as:

```ts
import { GetIssuingRequest } from "@anima-protocol/anima/challenges";

const challenge = GetIssuingRequest(
  "anima:schema:your-schema-id",
  // The fields you want to issue
  {
    name: "John Doe",
  },
  // The owner's information
  {
    public_address: "0x0000000000000000000000000000000000000000",
    chain: "EVM",
  },
  // The issuer's information
  {
    id: "your-issuer-id",
    public_address: "0x0000000000000000000000000000000000000000",
    chain: "EVM",
  }
);

console.log(challenge);
```

The `challenge` variable will contain the issuing request, which you can then send to your API.

## Examples

You can find more examples in the [examples](./examples) folder.

## Documentation

You can find the documentation about the anima protocol [here](https://docs.anima.io/anima-did-protocol/identity-owner/readme).
