const yargs = require('yargs');
const notes = require('./note.js');
const { argv } = require('yargs');

yargs.command({
    command : 'add',
    describe: 'Add a note Here',
    builder: {
        title: {
            describe:'Title Here',
            demandOption:true,
            type : 'string'
        },
        body: {
            describe:'Body Here',
        }
    },
    handler: (argv)=> {
        notes.addNotes(argv.title,argv.body)
       // console.log('Adding a Note ');
    }
});
yargs.command({
    command:'list',
    describe:'showing List',
    handler: (argv)=>{
        notes.list()
    }
})
yargs.command({
    command:"search",
    describe:"Search a Title",
    builder: {
        title:{
            describe:"Enter Title to search",
            demandOption:true
        }
    },
    handler: (argv)=>{
        notes.search(argv.title)
    }
})
yargs.command({
    command : 'remove',
    describe: 'Remove a note Here',
    builder: {
        title: {
            describe:'Title Here',
            demandOption:true,
            type : 'string'
        }
    },
    handler: (argv)=> {
        notes.remove(argv.title)
        //console.log('FROM NOTES ===> Title : ',argv.title);
    
    } 
});
yargs.parse();