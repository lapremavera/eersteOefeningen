document.write("<table>");



for(var i =1;i<= 10; i++){
    document.write("<tr>");
        for(var j= 1; j <= 10; j++){
        document.writeln("<td>" + i*j + "</td>");
    }
    document.writeln("</tr>");
}
document.writeln("</table>");



