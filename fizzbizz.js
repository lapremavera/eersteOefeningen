
document.writeln("Het spelletje FizzBizz: ");

for(var i= 1; i <= 100; i++){
    if(i%3 === 0 && i%5 === 0){
        document.writeln("Fizzbuzz");
    }else if (i%3===0)
    {
        document.writeln("Fizz");
    }
        else if (i%5===0)
    {
        document.writeln("Buzz");
    } else

    {
    document.writeln(i)
    }
}



