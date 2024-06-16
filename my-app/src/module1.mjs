import ui_b, {a,c} from './module2.mjs'  
// since we have not exported a & c as default, so we need to write a & c in curly braces, but can give any name to b 

console.log(ui_b);
console.log(a);
console.log(c);