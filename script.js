let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.text = "Ебать"; //изменяем текст кнопки 
tg.MainButton.setText("Ебать2"); //изменяем текст кнопки иначе
tg.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
tg.MainButton.color = "#3296ff"; //изменяем цвет бэкграунда кнопки
tg.MainButton.setParams({"color": "#143F6B"}); //так изменяются все параметры 

btn.addEventListener('click', function(){ //вешаем событие на нажатие html-кнопки
	if (tg.MainButton.isVisible){ //если кнопка показана 
		tg.MainButton.hide() //скрываем кнопку 
	}
  else{ //иначе
  	tg.MainButton.show() //показываем 
  }
});

let btnED = document.getElementById("btnED"); //получаем кнопку активировать/деактивировать
btnED.addEventListener('click', function(){ //вешаем событие на нажатие html-кнопки
	if (tg.MainButton.isActive){ //если кнопка показана 
		tg.MainButton.setParams({"color": "#E0FFFF"}); //меняем цвет
		tg.MainButton.disable() //скрываем кнопку 
	}
	else{ //иначе
		tg.MainButton.setParams({"color": "#143F6B"}); //меняем цвет
		tg.MainButton.enable() //показываем 
	}
});

Telegram.WebApp.onEvent('mainButtonClicked', function(){
	tg.sendData("some string that we need to send"); 
	//при клике на основную кнопку отправляем данные в строковом виде
});
