// Code goes here

var item = {
  itens: [
    {
      nome: "Porsche 918 Spyder",
      valor: "US $845.000 ",
    },
    {
      nome: "SSC Tuatara",
      valor: "US $970.000",
    },
    {
      nome: "Hennessey Venom GT",
      valor: "US $1 milhão",
    },
    {
      nome: "Pagani Huayra",
      valor: "US $1.3 milhões",
    },
    {
      nome: "Maybach Landaulet",
      valor: "US $1.4 milhões",
    },
    {
      nome: "Aston Martin One-77",
      valor: "US $1.4 milhões",
    },
    {
      nome: "Lamborghini Reventon",
      valor: "US $1.6 milhões",
    },
    {
      nome: "Koenigsegg Agera R",
      valor: "US $1.7 milhões",
    },
    {
      nome: "Zenvo ST1",
      valor: "US $1.8 milhões",
    },
    {
      nome: "Ferrari 599XX",
      valor: "US $2 milhões",
    },
    {
      nome: "Bugatti Veyron Supersport",
      valor: "US $2.6 milhões",
    },
  ],
};

var template = $("#item-template").html();
output = Mustache.render(template, item);
$("#mytable").append(output);

console.log(item);