//let keyboard

// let namebuilder = (firstname = 'abdur', lastname = 'rakib') => {
//     console.log(firstname + " " + lastname)
// }

// namebuilder();

// var x = 10

// if (x) {
//     let x = 4
//     console.log(x)
// }
// console.log(x)

// const keyword

// function coldenough(deg) {
//     const freezingTemp = 32;
//     if (freezingTemp <= deg) {
//         return deg + " is above freezingTemp"
//     } else {
//         return deg + " is below freezingTemp"
//     }
// }

// console.log(coldenough(20))
// console.log(coldenough(25))

// spread operators

// var cats = ['rakib', 'sakib', 'rahim', '3'];
// var goats = ['1', '2', '45'];

// var spread = ['s1', 's2', ...cats, 's3'];

// console.log(spread);
// console.log(spread[2][0]);

// sets

// var books = new Set();
// books.add('science');
// books.add('commerce').add('biology');

// console.log(books);
// console.log('has the book science? -->', books.has('science'));
// console.log('has the book science? -->', books.has('thanks'));

// var number = [1, 1, 2, 3, 45, 56, 3, 5, 6, 78, 4, 256];

// var dataset = new Set(number);
// console.log(dataset);

// console.log(number.length);
// console.log(dataset.size);

// the for...of loop
for (const text of 'rakib') {
  console.log(text);
}

var topics = ['react', 'node', 'js', 'es6'];
for (const topic of topics) {
  console.log(topic);
}
