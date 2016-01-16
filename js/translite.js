function translit(){
	// Символ, на который будут заменяться все спецсимволы
	var symbol = '-'; 
	// Берем значение из нужного поля и переводим в нижний регистр
	var text = $('#text').val().toLowerCase();
	//var text = document.getElementById('text').value.toLowerCase();	
	// Массив для транслитерации
	var transl = { 
					'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 'ж': 'zh', 'з': 'z', 'и': 'i',
					'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't',
					'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'sh', 'ъ': symbol, 'ы': 'y',
					'ь': symbol, 'э': 'e', 'ю': 'yu', 'я': 'ya',
					
					' ': symbol, '_': symbol, '`': symbol, '~': symbol, '!': symbol, '@': symbol, '#': symbol, '$': symbol,
					'%': symbol, '^': symbol, '&': symbol, '*': symbol, '(': symbol, ')': symbol, '-': symbol, '\=': symbol,
					'+': symbol, '[': symbol, ']': symbol, '\\': symbol, '|': symbol, '/': symbol, '.': symbol, ',': symbol,
					'{': symbol, '}': symbol, '\'': symbol, '"': symbol, ';': symbol, ':': symbol, '?': symbol, '<': symbol,
					'>': symbol, '№': symbol					
				 }
	
    var result = '';
	
	var curent_sim = '';
	
    for(i=0; i < text.length; i++) {
        // Если символ найден в массиве то меняем его
		if(transl[text[i]] != undefined) {			
			if(curent_sim != transl[text[i]] || curent_sim != symbol){
				result += transl[text[i]];
				curent_sim = transl[text[i]];				
			}					
		}
		// Если нет, то оставляем так как есть
        else {
			result += text[i];
			curent_sim = text[i];
		}		
    }	
	
	result_reverse = reverseString(result);
	
	// Выводим результат
	$('#translit').val(result);
	$('#translit-reverse').val(result_reverse);
    
}

function reverseString(string) {
    return string.split("").reverse().join("");
}


// Выполняем транслитерацию при вводе текста в поле
$(function(){
	$('#text').keyup(function(){
		translit();
		return false;
	});
});
