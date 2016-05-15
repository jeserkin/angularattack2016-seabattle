import * as gulp from 'gulp';
import * as util from 'gulp-util';

import { APP_BASE, PROD_DEST } from '../../config';

export = () => {
    util.log(APP_BASE + 'CNAME');

    return gulp.src(APP_BASE + 'CNAME')
        .pipe(gulp.dest(PROD_DEST));
};
