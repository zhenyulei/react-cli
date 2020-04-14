#!/usr/bin/env node
import { setNodeEnv } from '../util';
process.argv[2] === 'dev' ? setNodeEnv('development') : setNodeEnv('production');
import program from 'commander';
import { dev } from '../commands/dev';
import { ROOT_CLI_PATH } from '../util/dic';
const config = require(ROOT_CLI_PATH('package.json'));
program.version(`@nutui/cli ${config.version}`, '-v', '--version');

program.command('dev').description('本地调试运行官网和Demo示例123').action(dev);

program.parse(process.argv);