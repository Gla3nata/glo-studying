function checkArgument(arg) {
    if (typeof arg !== 'string') {
        alert('Ошибка: Аргумент должен быть строкой.');
        return;
    }
    let trimmedArg = arg.trim();
    if (trimmedArg.length > 30) {
        return trimmedArg.slice(0, 30) + '...';
    }else {
        return trimmedArg;
    }

}

console.log(checkArgument(' Это очень длинная строка которая точно больше тридцати символов   '));