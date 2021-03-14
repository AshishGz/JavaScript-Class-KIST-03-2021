//Write a JavaScript program to display the current day and time in the following format.
//date format Mar 9 2021, Tuesday 7:0
//Write a JavaScript program to get the website URL (loading page)
// document.write(getDate());
// function getDate() {
//     let date=new Date();
//     return date.getFullYear()+
//         '/'+(date.getMonth()+1)+'/'+
//         date.getDate()+'  '+
//         date.getHours()+':'+date.getMinutes()
//
//     +':'+date.getSeconds()
//         ;
// }

// function book(title, author) {
//     this.title = title;
//     this.author  = author;
// }
// var myBook = new book("Java Script", "React");
// document.write("Book title is : " + myBook.title + "<br>");
// document.write("Book author is : " + myBook.author + "<br>");
// getForINData();
// function getForINData() {
//
//     var person = {fname:"John", lname:"Doe", age:25};
//     var x;
//     for (x in person) {
//
//         document.write(person[x]);
//         document.write("<br />");
//     }
// }
getForEachLoopData();
function getForEachLoopData() {


    var places = ["Biratnagar", "Lalitpur", "Patan", "Kathmandu","Pokhara","Palpa"];


    places.forEach(function (value,key) {
        document.write(key+' : '+value);
        document.write('<br/>');
    })
}





