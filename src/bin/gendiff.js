#!/usr/bin/env node

import commander from 'commander';
// import { version, description } from '../../package.json';

commander.option('-h, --help', 'output usage information');
commander.option('1.0.0', '-V, --version', 'output the version number');
commander.description('Compares two configuration files and shows a difference.');
// commander.version('1.0.0', '-v, --vers', 'output the current version');


