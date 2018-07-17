const fsOperations = require('./fsOperations');
const cmd = process.argv[2];
const args = process.argv.slice(3);

function printHelp() {
    console.log(`Usage: node index.js [options]
  HackYourFuture Node.js Week 2 - Homework  To-Do App
  Options:
    list         Shows current to-dos, or shows an appropriate text if there are no to-dos
    add          Adds a to-do item. All the words behind add are entered as 1 to-do item to the list.
    remove       Removes a to-do item by its 1-base index, e.g. to remove second item, execute
    help         show this help text
    reset        Removes all to-do items from the list
    `);
  }

  switch (cmd){
      
    case 'add':
        fsOperations.appendFile(args)
            .then(() => fsOperations.readFile())
            .then(data => console.log(`TODOs:\n${data}`))
            .catch(err => console.log(err))
        break;
    case 'list':
        fsOperations.readFile()
            .then(data => console.log(data))
            .catch(err => console.log(err));
        break; 
    case 'remove':
        fsOperations.readFile()
        .then(data => newData = data.split(`\n`).slice(args).join(`\n`))
        .then(() => fsOperations.writeFile(newData))
        .then(() => fsOperations.readFile())
        .then(data => console.log(`To-Dos:\n${data}`))
        .catch()
        break;
    case 'reset':
        fsOperations.deleteFile()
        .then(() => fsOperations.writeFile(''))
        .then(() => fsOperations.readFile())
        .then(data => console.log(`TODOs:\n${data}`))
        .catch(err => console.log(err))
        break;
    case 'update': 
        let index = args[0];  
        let updatedItem = args[1];
        fsOperations.readFile()
        .then(() => fsOperations.updateFile(index, updatedItem))
        .then(() => fsOperations.writeFile())
        .then(data => console.log(`TODOS:\n${data}`))
        .catch(err => console.log(err))
        break;
    case 'help':
    default:
        printHelp();
        break;
  }