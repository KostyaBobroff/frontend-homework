/*
    Kostya Bobrov 15 variant
    Напишите функцию filter, которая фильтрует html-код, оставляя только разрешённые html-теги
*/

const specialCharacters = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
};

function filter(code, tags){
    return code.replace(/<\/?(\w+).*?>|\W/g, function (match, firstGroup) {
        if (firstGroup) {
            if (!tags.includes(firstGroup)) {
                return removeSpecialCharacters(match)
            } else {
                return match;
            }
        } else {
            return specialCharacters[match] || match;
        }
    });

}


//функция меняет специальные симовлы на html-код
function removeSpecialCharacters(code){
    return code.replace(/[<>'"&]/g, function (match) {
        return specialCharacters[match];
    });

}
