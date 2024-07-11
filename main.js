/**
 * создать JSON Formatter. Но результат показываем не по нажатию кнопки, 
 * а проверяем каждые 3 секунды, что ввел пользователь и если там корректный JSON-текст, 
 * справа выводим его в отформатированном виде
 * 
{"employees":[{"firstName":"John", "lastName":"Doe"},{"firstName":"Anna", "lastName":"Smith"},{"firstName":"Peter", "lastName":"Jones"}]}

{"name":"Иван","age":37,"mother":{"name":"Ольга","age":58},"children":["Маша","Игорь","Таня"],"married": true,"dog":null}
*/

function getJsonEntered()
{
  return document.getElementById('inputJson').value;
}

setInterval(formattedJson, 500, getJsonEntered() );

function formattedJson( inputJson ){
  
  
    let object = '';
    try {
        object = JSON.parse(inputJson); // Получили json-строку, превратили ее в объект и сразу проверили на ошибки через try-catch
        
        
        let formattedJson = JSON.stringify(object, null, 4); // если ошибок нет, то отформатируем 

        let colorJson  =  formattedJson.replace(/(\"[a-zA-z]+\")\:/gi, "<br>&nbsp;&nbsp;&nbsp;&nbsp;<font color=\"green\">$&</font>");
        colorJson  =  colorJson.replace(/([0-9]+)/gi,  "<font color=\"red\">$&</font>" );
        colorJson  =  colorJson.replace(/(true|false)/gi,  "<font color=\"blue\">$&</font>" );
        colorJson  =  colorJson.replace(/(\})/gi, "<br>&nbsp;&nbsp;&nbsp;&nbsp;$&");
        colorJson  =  colorJson.replace(/(\[)/gi, "$&<br>&nbsp;&nbsp;&nbsp;&nbsp;");
        colorJson  =  colorJson.replace(/(\]\,)/gi, "<br>&nbsp;&nbsp;&nbsp;&nbsp;$&");
        
       
       
       
        document.getElementById('outputDiv').innerHTML = colorJson;

      } catch (e) {
        console.error("При разборе JSON произошла ошибка:", e); //проблемы с JSON!
        document.getElementById('message').innerHTML = '[format error!]';
      }

}





