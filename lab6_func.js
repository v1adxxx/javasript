// // Напишите функцию filter(), которая создаёт массив email-адресов, не попавших в чёрный
// // список. В качестве аргументов функция должна принимать: массив строк с исходными
// // email адресами, массив строк с email адресами в чёрном списке.

// let emails  = ["1@gmail.com", "2@gmail.com", "3@gmail.com", "4@gmail.com", "5@gmail.com"];
// let blacklist = ["1@gmail.com", "3@gmail.com"];
// let whitelist = [];

// function filter(emails, blacklist){
//     for (i = 0; i < emails.length; i++){
//         if (blacklist.indexOf(emails[i]) === -1){
//             whitelist.push(emails[i]);
//         }
//     }
// }

// filter(emails, blacklist);
// console.log(whitelist);

// // Напишите функцию calculate(), которая вычисляет и возвращает стоимость корзины
// // товаров после применения всех скидок. В качестве аргументов функция принимает 3 параметра:
// // Общая сумма корзины
// // Количество товаров в корзине
// // Промокод (по умолчанию null)

function calculate(totalAmount, itemCount, promo = null) {
    let finalAmount = totalAmount;
    
    if (promo === 'ДАРИМ300') {
        finalAmount = Math.max(0, totalAmount - 300);
        console.log("Был применен промокод ДАРИМ300.")
    }

    if (itemCount >= 10) {
        finalAmount *= 0.95;
        console.log("Была применена скидка за ко-во товаров.")
    }

    if (totalAmount > 50000) {
        let discountAmount = (totalAmount - 50000) * 0.20;
        finalAmount -= discountAmount;
        console.log("Была применена скидка за сумму товаров.")
    }

    if (promo === 'СКИДКА15' && totalAmount >= 20000) {
        finalAmount *= 0.85;
        console.log("Был применен промокод СКИДКА15.")
    }
    
    return finalAmount;
}

let finalPrice = calculate(65500, 15, 'ДАРИМ300');
console.log("Итоговая стоимость после применения скидок:", finalPrice);
