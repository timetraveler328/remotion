import {CliInternals} from '@remotion/cli';
import minimist from 'minimist';
import {AwsRegion} from '../pricing/aws-regions';

type LambdaCommandLineOptions = {
	help: boolean;
	region: AwsRegion;
	memory: number;
	timeout: number;
	y: boolean;
	yes: boolean;
	force: boolean;
	f: boolean;
	quiet: boolean;
	['site-name']: string | undefined;
	['disable-chunk-optimization']: boolean;
	['save-browser-logs']: boolean;
};

export const parsedLambdaCli = minimist<LambdaCommandLineOptions>(
	process.argv.slice(2),
	{
		boolean: CliInternals.BooleanFlags,
	}
);

export const forceFlagProvided =
	parsedLambdaCli.f ||
	parsedLambdaCli.force ||
	parsedLambdaCli.yes ||
	parsedLambdaCli.y;