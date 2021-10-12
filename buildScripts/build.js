import webpack from 'webpack';
import config from '../webpack.prod.config';
import chalk from 'chalk';

webpack(config).run( (err, stats) => {
    if (err) {
        console.log(chalk.red(err));
        return 1;
    }
});