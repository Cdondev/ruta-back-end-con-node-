import { suma,multiplica} from "./archivo-a-importar/controller.js"

// libreria 

import chalk from 'chalk';

console.log(chalk.green(multiplica(suma(1, 2), suma(4, 5))))