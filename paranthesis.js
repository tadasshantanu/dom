let s = '[()]';
let stack = [];
for (var i=0;i<s.length;i++)
if(s[i] == '(' || s[i] == '{' || s[i] == '[')
{  
    stack.push (s[i]);
}
else if(s[i] == ')' && stack [stack.length-1] == '(' || s[i] == '}' && stack [stack.length-1] == '{' || s[i] == ']' && stack [stack.length-1] == '[')
{
    stack.pop();
}
else {
    stack.push(s[i])
}
if(stack.length==0)
{
    console.log(true);
}
else{
    console.log(false)
}