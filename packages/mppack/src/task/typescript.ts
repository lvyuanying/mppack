import debug from 'debug';
import gulp from 'gulp';
import ts from 'gulp-typescript';
import config from '../config';
import { changed } from '../plugin/changed';
import { log } from '../plugin/log';
const debugLog = debug('mppack:task:ts');

export const typescript = () => {
  const { typescript, output } = config;
  debugLog('outout: %s, typescript: %j', output, typescript);
  const tsProject = ts.createProject('tsconfig.json');
  return gulp
    .src(typescript)
    .pipe(changed())
    .pipe(log({ prefix: 'ts', extName: '.js' }))
    .pipe(tsProject())
    .pipe(gulp.dest(output));
};
