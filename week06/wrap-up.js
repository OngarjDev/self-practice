//JSO 122
const subfunction = (fname,lname) => fname + " " + lname + " This is function"
const name = (fname,lname,formatter) => formatter(fname,lname);
console.log(name('Ongarj','Thongchai',subfunction))