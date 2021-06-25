function countCamelCase(str)
{
    let count=1;

    var s=str.split(/(?=[A-Z])/);
    
    for(var i =0;i <s.length; i++) {
    console.log(s[i]);
}

    for(var i=0; i<str.length;i++){

      if(str[i]>= 'A' && str[i]<= 'Z')
      {
      count++;
    }
}

return count;
}
 var str = "saveChangesInTheEditor";
console.log(countCamelCase(str));