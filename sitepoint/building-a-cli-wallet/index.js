#!/usr/bin/env node
// npm install -g => for global used of: "tokenize" command
const colors = require('colors');
const clear = require('clear');
const CFonts = require('cfonts');

clear();

// tokenize wallet create => [wallet, create]
const args = process.argv.slice(2);
const dappName = "tokenize";

if (args.length == 0) {
    CFonts.say(dappName, {colors: ['red']})
    console.log(`Usage:

    ${dappName} balance
        Gets balance in tokens and shows public address

    ${dappName} send <amount> <address>=
        Send a fixed amount of tokens from your wallet to the specified address

    ${dappName} wallet create
        Guides you through creating a new wallet`);
    
    process.exit();
}

const main = async () => {
    CFonts.say(dappName, {colors: ['red']});

    if (args[0] == 'wallet') {
        if (args[1] == 'create') {
            console.log('Guides you through creating a new wallet');
        }
    } else if (args[0] == 'balance') {
        console.log('Gets balance in tokens and shows public address');
    } else if (args[0] == 'send') {
        console.log('Send a fixed amount of tokens from your wallet to the specified address')
    } else {
        console.log('That was not a valid command. Please try again.');
        process.exit();
    }
};

main();