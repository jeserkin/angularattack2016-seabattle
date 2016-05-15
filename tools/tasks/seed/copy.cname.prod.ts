import * as gulp from 'gulp';
import { join } from 'path';
import * as util from 'gulp-util';

import { APP_BASE, PROD_DEST, TMP_DIR } from '../../config';

export = () => {
    return gulp.src(join(APP_BASE, 'CNAME'))
        .pipe(gulp.dest(TMP_DIR));
};
