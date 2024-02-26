/*Результат выгружаем в новый репозиторий в GitHub (желательно каждый пункт отдельным коммитом) с использованием GitHub Pages (ссылку на Github Pages указать в решении работы). Вместе с выполнением каждого пункта добавьте один или несколько вызовов функции, демонстрирующих его выполнение.

1. Напишите функцию (например, printObject), которая принимает в качестве аргумента JSON-строку (например, '{"myKey": 42}'), преобразует её в объект (например, {myKey: 42}) и выводит его в консоль. Пример:
printObject('{"myKey": 42}');
// в консоли объект вида {myKey: 42} */
function printObject(jsonString) {
    const obj = JSON.parse(jsonString);
    console.log(obj);
}

printObject('{"myKey": 42}');

/* 2. В случае если переданная строка не может быть обработана как JSON, выдайте своё сообщение об этом в консоль
printObject('{I am not} a valid JSON');
// Не удалось получить JSON из значения: "{I am not} a valid JSON" */

function printObject(jsonString) {
    try {
        const obj = JSON.parse(jsonString);
        console.log(obj);
    } catch (error) {
        console.log(`Не удалось получить JSON из значения: "${jsonString}"`);
    }
}

printObject('{I am not} a valid JSON');
