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
            const filteredObj = Object.fromEntries(
                Object.entries(obj).filter(([key]) => keys.includes(key))
            );
            console.log(filteredObj);
        }
    } catch (error) {
        console.log(`Не удалось получить JSON из значения: "${jsonString}"`);
    }
}

printObject('{"name": "Нуржан", "age": 20, "city": "Бишкек"}');
printObject('{"name": "Нуржан", "age": 20, "city": "Бишкек"}', ['name', 'city']);

/* 4. Функция должна выбрасывать исключение в нижеперечисленных случаях (cделайте несколько вызова функции с некорректными параметрами и обработайте данные исключения снаружи вызова):
если результатом обработки JSON является не объект (выберите способ проверки по душе):
printObject('["это", "массив", "а не объект"]');
printObject('"а это строка"');
printObject('42');
если передан второй параметр и как минимум один из ключей не удаётся обнаружить в объекте (можно проверять через hasOwn/hasOwnProperty, либо оператор in, либо сравнивать с undefined)
printObject('{"name": "Айбек", "age": 31}', ['name', 'city']);
// ключ city отсутствует в полученном объекте */

function printObject(jsonString, keys = []) {
    let obj;
    try {
        obj = JSON.parse(jsonString);
        if (typeof obj !== 'object' || Array.isArray(obj)) {
            throw new Error('Результат обработки JSON не является объектом');
        }
        if (keys.length > 0) {
            keys.forEach(key => {
                if (!(key in obj)) {
                    throw new Error(`Ключ "${key}" отсутствует в объекте`);
                }
            });
        }
        console.log(obj);
    } catch (error) {
        console.log(error.message);
    }
}



printObject('["это", "массив", "а не объект"]');
printObject('"а это строка"');
printObject('42');
printObject('{"name": "Айбек", "age": 31}', ['name', 'city']);


// 5. Напишите промис, вызывающий функцию с задержкой в 1 секунду. Если она выполнилась успешно, мы увидим результат в консоли. Если было выброшено исключение, его нужно перехватить и вывести в консоль. 

function delayedFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        
            try {
               
                const result = myFunction(); 
                resolve(result);
            } catch (error) {
                reject(error);
            }
        }, 1000);
    });
}

delayedFunction()
    .then(result => {
        console.log('Результат:', result);
    })
    .catch(error => {
        console.log('Ошибка:', error);
    });
