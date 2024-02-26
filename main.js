
function printObject(jsonString) {
    const obj = JSON.parse(jsonString);
    console.log(obj);
}

printObject('{"myKey": 42}');
