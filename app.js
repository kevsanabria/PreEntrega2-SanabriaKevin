class Pokemon
{
nombre;
tipo;
id;

    constructor(id,nombre,tipo)
    {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
    }
}


const pikachu = new Pokemon (1, "Pikachu","Electrico")
const charizard = new Pokemon (2, "Charizard", "Fuego")
const articuno = new Pokemon (3 ,"Articuno","Hielo")
const agumon = new Pokemon (4, "Agumon","Data") 
const goku = new Pokemon (5, "Goku","Saiyan")
const yoshi = new Pokemon (6, "Yoshi" , "Dragon")
const metabee = new Pokemon (7, "Metabee" , "Metal")
const seiya = new Pokemon (8, "Seiya", "Bronce")
const kirby = new Pokemon (9,"Kirby", "Viento" )
const sonic = new Pokemon (10, "Sonic","Viento")
const crash = new Pokemon (11, "Crash", "Normal")
const spyro = new Pokemon (12, "Spyro", "Dragon")
const chocobo = new Pokemon (13, "Chocobo", "Volador")


console.log(pikachu.nombre)
const pokemons = [pikachu, charizard, articuno, agumon, goku, yoshi, metabee, seiya, kirby, sonic, spyro, crash, chocobo,]
console.log(pokemons.nombre)
// tenemos una lista de pokemons que no se muestra, preguntamos al usuario que pokemon quiere

function filtroPorTipo (){
let dato = prompt("Filtrar pokemons segun su tipo: \n Electrico \n Fuego \n Hielo \n Data \n Saiyan \n Dragon \n Metal \n Bronce \n Normal \n Volador")

    let filtroPokemon = pokemons.filter((pokemons) => { return pokemons.tipo == dato })
    if (filtroPokemon != 0)
    {
        console.log(filtroPokemon.length)
        let nombrePokemon = filtroPokemon.map((filtroPokemon) => {return "\n" + filtroPokemon.nombre } )
        alert (nombrePokemon)
        console.log(nombrePokemon)
        console.log(filtroPokemon)
    }

    else{alert("No se encontro ese tipo en nuestra base de datos, intente nuevamente")}
    filtroPorTipo()
}

function menuDeInicio() {
  let inicioPoke
  do{
inicioPoke = parseInt(prompt("Bienvenidos al Pokedex \n 1 - Pokedex \n 2 - Recetas exquisitas con Magicarp \n 3 - Salir"))
  switch (inicioPoke) {
      case 1:
          filtroPorTipo()
          break
      case 2:
          alert("Pagina en Construccion")
          break
      case 3:
            alert("Gracias vuelva pronto")
            break
      default:
          alert("Valor incorrecto, pendejo")
      }
  }
  while(inicioPoke !=3)
}
menuDeInicio()