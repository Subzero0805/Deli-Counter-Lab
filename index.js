
var katzDeli = [];
function takeANumber(katzDeli,name){
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}

function nowServing(katzDeli){
  if (katzDeli.length !== 0){
    return(`Currently serving ${katzDeli.shift()}.`);
  } else {
    return "There is nobody waiting to be served!";
  }
}



function currentLine(customerArrays){
  if (customerArrays.length === 0){
    return "The line is currently empty.";
  }
  var lineLength = [];
  for(let i = 0; i < customerArrays.length; i++){
    lineLength.push(` ${i+1}. ${customerArrays[i]}`);
  }
  return "The line is currently:" + lineLength.join(',');
}
