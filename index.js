#!/usr/bin/env node

const { white, bold, blueBright } = require("colorette");

const output = `
${white(bold("Profession:"))} Software Engineer
    ${white(bold("Github:"))} https://github.com/rajputusman (@RajputUsman)


      ${white(bold("Card:"))} npx rajputusman
`;

console.log(output);
