var str='';
for (let index = 0; index < 5; index++)
{
    str =  " ".repeat(5-index) + "*".repeat(index+1);
    console.log(str);
}