import * as gulp from 'gulp';

import { APP_BASE, DEV_DEST } from '../../config';

export = () => {
    return gulp.src([
        APP_BASE + 'CNAME'
    ])
        .pipe(gulp.dest(DEV_DEST));
};
