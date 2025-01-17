import path from 'path';
import fs from 'fs/promises';
import { markdownTable } from 'markdown-table';
import outdent from 'outdent';
import commentMark from 'comment-mark';
import byteSize from 'byte-size';
import { minBy } from 'lodash';
import { format } from 'date-fns';
import * as mdu from '../../lib/utils/mdu';
import { formatMs, percent } from '../../lib/utils/formatting';
import type {
	Artifact,
	ArtifactMinifierBenchmarks,
	MinifierBenchmarksResultObject,
	BenchmarkResult,
} from '../../lib/types';

byteSize.defaultOptions({ precision: 2 });

const displayColumn = (
	text: string,
	annotation: string,
	isWinner: boolean,
) => {
	const columnText = (
		mdu.sup(`${isWinner ? '🏆' : ''}${annotation || ''} `)
		+ mdu.c(text)
	);

	return isWinner ? mdu.strong(columnText) : columnText;
};

const compareSpeed = (
	current: BenchmarkResult,
	fastest: BenchmarkResult,
) => (
	(fastest === current)
		? ''
		: mdu.emphasize(`${Math.floor(current.time / fastest.time)}x`)
);

const PositiveInfinity = Number.POSITIVE_INFINITY;
function processResults(results: MinifierBenchmarksResultObject) {
	return Object.entries(results).map(([minifierName, benchmarks]) => {
		const [result] = benchmarks;
		const avgTime = benchmarks.reduce(
			(current, next) => current + next?.time,
			0,
		) / benchmarks.length;

		return {
			name: minifierName,
			...result,
			time: avgTime,
		};
	}).sort(
		(a, b) => (a.minzippedSize ?? PositiveInfinity) - (b.minzippedSize ?? PositiveInfinity),
	);
}

function getBenchmarkTable(
	artifact: Artifact,
	minifierResults: MinifierBenchmarksResultObject,
) {
	const results = processResults(minifierResults);
	const smallestMinifiedSize = minBy(results, 'minifiedSize');
	const smallestMinzipped = minBy(results, 'minzippedSize');
	const fastest = minBy(results, 'time');

	return markdownTable([
		['Minifier', 'Minified size', 'Minzipped size', 'Time'],
		...results.map(min => [
			mdu.link(min.name, `/lib/minifiers/${min.name}.ts`) + (min.time ? '' : (` ${mdu.sub('_Failed_')}`)),
			(
				min.minifiedSize
					? displayColumn(
						byteSize(min.minifiedSize),
						percent(artifact.size, min.minifiedSize),
						min === smallestMinifiedSize,
					)
					: '—'
			),
			(
				min.minzippedSize
					? displayColumn(
						byteSize(min.minzippedSize),
						percent(artifact.gzipSize, min.minzippedSize),
						min === smallestMinzipped,
					)
					: '—'
			),
			(
				min.time
					? displayColumn(
						formatMs(min.time),
						compareSpeed(min, fastest),
						min === fastest,
					)
					: '—'
			),
		]),
	], {
		align: ['l', 'r', 'r', 'r'],
	});
}

export function getBenchmarkDataTables(artifactMinifierBenchmarks: ArtifactMinifierBenchmarks[]) {
	return artifactMinifierBenchmarks.map(
		({ artifact, results }) => outdent`
			${
				markdownTable([
					['Artifact', 'Original size', 'Gzip size'],
					[
						mdu.link(
							`**${artifact.moduleName} v${artifact.moduleVersion}**`,
							`https://www.npmjs.com/package/${artifact.moduleName}/v/${artifact.moduleVersion}`,
						),
						mdu.c(byteSize(artifact.size)),
						mdu.c(byteSize(artifact.gzipSize)),
					],
				], {
					align: ['l', 'r', 'r'],
				})
			}

			${getBenchmarkTable(artifact, results)}
		`,
	).join('\n----\n');
}

const README_PATH = path.resolve('./readme.md');

export async function updateReadmeMd(benchmarks: string) {
	const readmeMd = commentMark(await fs.readFile(README_PATH), {
		lastUpdated: format(new Date(), 'MMM d, y'),
		benchmarks,
	});

	await fs.writeFile(README_PATH, readmeMd);
}
