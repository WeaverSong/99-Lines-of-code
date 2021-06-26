//List of five friends
const Friends = ["Naharie", "Wingspan", "Novacat", "Laious", "WingedSeal"];

//The hint said I would need 2 loops, so I decided to do it in 0, and use recursion instead.
const song = function (names, number)
{
    if (typeof(names) != "string")
    {
        if (names.length == 0) return;
        let name = names.splice(0, 1)[0];
        song(name, 99);
        if (names.length != 0) song(names);
    }
    else
    {
        if (number > 1)
        {
            console.log(number +  " lines of code in the file, " + number + " lines of code; " + names + "strikes one out, clears it all out, " + (number - 1) + " lines of code in the file");
            song (names, number - 1);
        }
        else
        {
            console.log("1 line of code in the file, 1 line of code; " + names + " strikes one out, clears it all out, no more lines of code in the file");
        }
    }
}