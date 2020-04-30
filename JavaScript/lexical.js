// Lexical Environment (Scope)
var myVariable;
console.log('Global Enviroment:'+ myVariable);
{
    
    console.log('First Lexical Enviroment:'+ myVariable);
    {
        myVariable="THY";
        console.log('Second Lexical Enviroment:'+ myVariable);
    }
}