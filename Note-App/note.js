const fs = require('fs')
const chalk = require('chalk')




/**********     Adding Note From here       ****************** */    

const addNotes =(title,body)=>{

    const n =  loadNotes();
    const dublicateNote = n.find((note)=>note.title ===title)

    //console.log(typeof n)
    if(!dublicateNote){
        n.push({
            title:title,
            body:body
        })
        saveFile(n)
        console.log(chalk.green.bold('File Saved SuccessFully'))
    }
    else{
        console.log(chalk.white.bgRed.bold("title is already Taken"));
    }

}



/***********    Remove Notes From here      ********** */

const removeNotes =(title) => {
    const myNotes = loadNotes();
    const existNotes = myNotes.find((noteValue)=>noteValue.title != title) 
    if(existNotes.length === myNotes.length )
    {
        console.log("No Notes Found With this Name")
    }
    else
    {
        saveFile(existNotes)
    }
}


/*******    List s Note     *****/

const list = ()=>{

    const myNotes =loadNotes();

    console.log(chalk.white.bgBlue('\n-------- Your Notes -------\n'));
    
    myNotes.forEach(element => {
        console.log(chalk.yellow(element.title)+"   :   "+chalk.green(element.body));
    });


}

/***********    Search Notes       ********** */

const search =(title) => {
    const myNotes = loadNotes();
    const existNotes = myNotes.find((noteValue)=>noteValue.title == title) 
    if(!existNotes)
    {
        console.log(chalk.red("No Notes Found With this Name"))
    }
    else
    {
        console.log(chalk.yellow(title)+"   :   "+chalk.green(existNotes.body));
    }
}




/***********    Common Part ********** */


//------------Getting Notes


const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const stringData = dataBuffer.toString();
        return JSON.parse(stringData);
    }
    catch(e){
        return []
    }   
}

// ------------- Saving a Note

const saveFile = (notes) => {
    const dataString = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataString);

}

/*      *******     Export Variable Call     *********        */

const myNotes = {
    search:search,
    list : list,
    remove: removeNotes,
    addNotes : addNotes
}
module.exports = myNotes;