function fazGet(url) {
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText
}

function main() {
    data = fazGet("https://parallelum.com.br/fipe/api/v1/carros/marcas");
    itens = JSON.parse(data);
}

main();

var item = {
  itens
}

var template = $("#itemtemplate").html();
output = Mustache.render(template, item);
$("#mytable").append(output);

console.log(item);