import arg from 'arg';
export function parseArgumentsIntoOptions(rawArgs) {
	const args = arg({
		"--yes": Boolean,
		"-y": "--yes",
	}, {
		argv: rawArgs.slice(2),
	});
	return {
		skiPrompt: args['--yes'] || false,
		template: args._[0],
		name: args._[1],
		target: args._[2],
		version: args._[3],
	}
}