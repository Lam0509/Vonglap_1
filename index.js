// Bài 1

// for (let i = 1; i <= 100; i++) {
//     console.log(i);
//     if (i == 99) {
//         console.log('Đã hoàn thành')
//         break;
//     }
// }

// Bài 2
// let nhietDo = +prompt('Nhập vào nhiệt độ');
// do {
//     if (nhietDo > 100) {
//         alert('Yêu cầu giảm nhiệt độ');
//         nhietDo = prompt('Nhập vào nhiệt độ')
//     } else if (nhietDo < 20) {
//         alert('Yêu cầu tăng nhiệt độ');
//         nhietDo = prompt('Nhập vào nhiệt độ')
//     } else {
//         alert('Nhiệt độ thích hợp');
//         break;
//     }
// } while (nhietDo)

// // // Bài 3
// let n1 = 0, n2 = 1, nextTerm;
// for (let i = 1; i <= 20; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }

// Bài 4
// let n1 = 0, n2 = 1, nextTerm;
// for (let i = 1; i <= 20; i++) {
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
//     if (n1 % 5 == 0) {
//         console.log(n1);
//         break;
//     }
// }

// Bài 5
// let n1 = 0, n2 = 1, nextTerm, sum = 0;
// for (let i = 1; i <= 6; i++) {
//     sum += n1;
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }
// alert(sum);

// Bài 6
// var sum = 0;
// for (var i = 1; i <= 30; i++) {
//     if (i % 7 == 0) {
//         sum += i;
//     }
// }
// alert(sum);

// Bài 7
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0) {
//         document.write('Fizz' + '<br>');
//         continue;
//     }
//     if (i % 5 == 0) {
//         document.write('Buzz' + '<br>');
//         continue;
//     }
//     if (i % 3 == 0 && i % 5 == 0 ) {
//         document.write('FizzBuzz' + '<br>');
//         continue;
//     }
//     document.write(i + '<br>')
// }

// Bài 8
// function playGame() {
//     let range = +prompt('Nhập vào khoảng số người dùng muốn đoán');
//     let x = Math.floor(Math.random() * range);
//     let guess = +prompt('Nhập giá trị người dùng đoán');
//     let count = 0;
//     while (x != guess) {
//         count++;
//         if (count == 4) {
//             alert('Bạn đã hết số lần đoán');
//             break
//         } else if (x < guess) {
//             alert('Số bạn đoán lớn hơn');
//         } else {
//             alert('Số bạn đoán bé hơn');
//         }
//         guess = +prompt('Nhập giá trị người dùng đoán');
//     }
//     if (count == 4) {
//         alert('Bạn đã hết lượt đoán');
//     } else {
//         alert('Chúc mừng bạn đã đoán trúng')
//     }
// }





