#!/usr/bin/env node

import commander from 'commander';
import { version, description } from '../../package.json';

commander.option('-h, --help', 'output usage information');
commander.option('-V, --version', 'output the version number');
commander.description(description);


