#!/usr/bin/env node

import commander from 'commander';
import runGenDiff from '..';

commander
    .version('1.0.0')
    .description('Compares two configuration files and shows a difference.')
    .option('-f, --format [type]', 'output format')
    .arguments('<filepath1> <filepath2>');

commander.parse(process.argv)