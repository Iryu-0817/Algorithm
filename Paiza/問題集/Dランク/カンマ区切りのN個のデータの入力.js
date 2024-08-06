
reader.on('close', () => {

    let array = lines[1].split(',');

    for(let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

    

});