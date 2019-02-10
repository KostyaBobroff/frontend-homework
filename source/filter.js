/*
    Kostya Bobrov 15 variant
    Напишите функцию filter, которая фильтрует html-код, оставляя только разрешённые html-теги
*/

const SPECIAL_CHARACTERS = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
};



 const filter = (code, tags) => {
    return code.replace(/<\/?(\w+).*?>|\W/g, (match, firstGroup) => {
        if (!firstGroup) {
            return SPECIAL_CHARACTERS.hasOwnProperty(match) ? SPECIAL_CHARACTERS[match] : match;
        }

        if (!tags.includes(firstGroup)) {
            return removeSpecialCharacters(match)
        }

        return match;
    });
};


//функция меняет специальные симовлы на html-код
const removeSpecialCharacters = code => {
    return code.replace(/[<>'"&]/g, match => SPECIAL_CHARACTERS[match]);
};

