import { join } from 'path';

import { SeedConfig } from './seed.config';
import { InjectableDependency } from './seed.config.interfaces';

/**
 * This class extends the basic seed configuration, allowing for project
 * specific overrides. A few examples can be found below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  constructor() {
    super();
    this.APP_TITLE = 'Sea Battle';
    let additional_deps: InjectableDependency[] = [
      {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      // {src: 'lodash/lodash.min.js', inject: 'libs'},
      {src: 'bootstrap/dist/js/bootstrap.js', inject: 'libs'},
      {src: 'bootstrap/dist/css/bootstrap.css', inject: true} // inject into css section
    ];

    const seedDependencies = this.NPM_DEPENDENCIES;

    this.NPM_DEPENDENCIES = seedDependencies.concat(additional_deps);

    this.SYSTEM_CONFIG = {
      defaultJSExtensions: true,
      packageConfigPaths: [
        `${this.APP_BASE}node_modules/*/package.json`,
        `${this.APP_BASE}node_modules/**/package.json`,
        `${this.APP_BASE}node_modules/@angular/*/package.json`,
        `${this.APP_BASE}node_modules/@ngrx/*/package.json`,

        `${this.APP_BASE}node_modules/path-to-regexp/*/package.json`,
        `${this.APP_BASE}node_modules/isarray/*/package.json`,

        `${this.APP_BASE}node_modules/query-string/*/package.json`,
        `${this.APP_BASE}node_modules/strict-uri-encode/*/package.json`

      ],
      paths: {
        [this.BOOTSTRAP_MODULE]: `${this.APP_BASE}${this.BOOTSTRAP_MODULE}`,
        'angular2/*': `${this.APP_BASE}angular2/*`,
        'rxjs/*': `${this.APP_BASE}rxjs/*`,
        'ngrx/*': `${this.APP_BASE}ngrx/*`,

        'app/*': `/app/*`,

        // The only change is here
        'firebase': '/node_modules/firebase/lib/firebase-web',

        '*': `${this.APP_BASE}node_modules/*`
      },
      packages: {
        '@angular/core': {
          main: 'index.js',
          defaultExtension: 'js'
        },
        '@angular/compiler': {
          main: 'index.js',
          defaultExtension: 'js'
        },
        '@angular/common': {
          main: 'index.js',
          defaultExtension: 'js'
        },
        '@angular/http': {
          main: 'index.js',
          defaultExtension: 'js'
        },
        '@angular/platform-browser': {
          main: 'index.js',
          defaultExtension: 'js'
        },
        '@angular/platform-browser-dynamic': {
          main: 'index.js',
          defaultExtension: 'js'
        },
        '@angular/router-deprecated': {
          main: 'index.js',
          defaultExtension: 'js'
        },
        '@angular/router': {
          main: 'index.js',
          defaultExtension: 'js'
        },
        'rxjs': {
          defaultExtension: 'js'
        },

        // @ngrx/router package
        '@ngrx/router': {
          main: 'index.js',
          defaultExtension: 'js'
        },

        // @ngrx/router dependencies
        'path-to-regexp': {
          main: 'index.js',
          defaultExtension: 'js'
        },
        'isarray': {
          main: 'index.js',
          defaultExtension: 'js'
        },
        'query-string': {
          main: 'index.js',
          defaultExtension: 'js'
        },
        'strict-uri-encode': {
          main: 'index.js',
          defaultExtension: 'js'
        }
      }
    };

    this.SYSTEM_BUILDER_CONFIG = {
      defaultJSExtensions: true,
      packageConfigPaths: [
        join(this.PROJECT_ROOT, 'node_modules', '*', 'package.json'),
        join(this.PROJECT_ROOT, 'node_modules', '@angular', '*', 'package.json')
      ],
      paths: {
        [`${this.TMP_DIR}/*`]: `${this.TMP_DIR}/*`,
        'rxjs/*': `node_modules/rxjs/*`,
        'angular2/*': `node_modules/angular2/*`,
        'ngrx/*': `node_modules/ngrx/*`,
        
        'firebase': 'node_modules/firebase/lib/firebase-web.js',
        'angularfire2': `node_modules/angularfire2/angularfire2.js`,
        
        '*': 'node_modules/*',
      },
      packages: {
        '@angular/core': {
          main: 'index.js',
          defaultExtension: 'js'
        },
        '@angular/compiler': {
          main: 'index.js',
          defaultExtension: 'js'
        },
        '@angular/common': {
          main: 'index.js',
          defaultExtension: 'js'
        },
        '@angular/http': {
          main: 'index.js',
          defaultExtension: 'js'
        },
        '@angular/platform-browser': {
          main: 'index.js',
          defaultExtension: 'js'
        },
        '@angular/platform-browser-dynamic': {
          main: 'index.js',
          defaultExtension: 'js'
        },
        '@angular/router-deprecated': {
          main: 'index.js',
          defaultExtension: 'js'
        },
        '@angular/router': {
          main: 'index.js',
          defaultExtension: 'js'
        },
        'rxjs': {
          defaultExtension: 'js'
        },

        // @ngrx/router package
        '@ngrx/router': {
          main: 'index.js',
          defaultExtension: 'js'
        },

        // @ngrx/router dependencies
        'path-to-regexp': {
          main: 'index.js',
          defaultExtension: 'js'
        },
        'isarray': {
          main: 'index.js',
          defaultExtension: 'js'
        },
        'query-string': {
          main: 'index.js',
          defaultExtension: 'js'
        },
        'strict-uri-encode': {
          main: 'index.js',
          defaultExtension: 'js'
        }
      }
    };
  }
}
