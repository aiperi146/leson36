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

/* 3. Добавьте второй аргумент функции - массив строк. Если он передан, будет отвечать за перечень ключей, которые нужно получить из объекта, и выводить в консоль только их:
printObject(
    '{"name": "Нуржан", "age": 20, "city": "Бишкек"}',
);
// в консоли виден весь объект: {name: Нуржан, age: 20, city: Бишкек}

printObject(
    '{"name": "Нуржан", "age": 20, "city": "Бишкек"}',
    ['name', 'city'],
);
// в консоли видны только два ключа объекта: {name: Нуржан, city: Бишкек} */

function printObject(jsonString, keys = []) {
    try {
        const obj = JSON.parse(jsonString);
        if (keys.length === 0) {
            console.log(obj);
        } else {
            const filteredObj = {};
            keys.forEach(key => {
                if (obj.hasOwnProperty(key)) {
                    filteredObj[key] = obj[key];
                }
            });
            console.log(filteredObj);
        }
    } catch (error) {
        console.log(`Не удалось получить JSON из значения: "${jsonString}"`);
    }
}


printObject('{"name": "Нуржан", "age": 20, "city": "Бишкек"}');
printObject('{"name": "Нуржан", "age": 20, "city": "Бишкек"}', ['name', 'city']);
