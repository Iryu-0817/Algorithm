
reader.on('close', () => {
    
    let array = lines[0].split(' ');
  
  let difference = parseInt(array[0]) - parseInt(array[1]);
  
  let reamedy = parseInt(array[0]) * parseInt(array[1]);
  
  let differences = difference < 0 ? '-' + Math.abs(difference) : difference;
  
  console.log(differences, reamedy);
});