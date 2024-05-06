// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве,
// решение задание должно состоять из одной строки

const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и
// decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение
// счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

function createCounter() {
    let count = 0;

    return {
        getCount: function () {
            return count;
        },
        increment: function () {
            count++;
        },
        decrement: function () {
            count--;
        }
    };
}

const counter = createCounter();
console.log(counter.getCount()); // 0
counter.increment();
console.log(counter.getCount()); // 1
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getCount()); // 2

// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса
// в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

function findElementByClass(rootEl, className) {
    if (rootEl.classList && rootEl.classList.contains(className)) {
        return rootEl;
    }

    const childrenEl = Array.from(rootEl.children);
    const foundElement = childrenEl.reduce((accumulator, childEl) => {
        return accumulator || findElementByClass(childEl, className);
    }, null);

    return foundElement || null;
}

const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);
