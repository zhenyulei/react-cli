import { devConfig } from '../webpack/dev.config';
import logger from '../util/logger';
import { compileWebPack } from './webpack';
export async function compileSite(prod: boolean = false) {
	try {
		compileWebPack(devConfig);
		prod && logger.success('build site success!');
	} catch (error) {
		logger.error(error);
	}
}
