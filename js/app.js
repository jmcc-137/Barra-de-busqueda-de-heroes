const heroes = [
    {
      nombre: "Bruce Wayne",
      alias: "Batman",
      casa: "DC",
      aparicion: 1939,
      resumen: "Millonario de día, vigilante de noche.",
      descripcion: "Bruce Wayne, también conocido como Batman, es un justiciero sin poderes que protege Gotham City usando su intelecto, habilidades de combate, y tecnología avanzada. Motivado por el asesinato de sus padres, lucha contra el crimen desde las sombras como uno de los miembros fundadores de la Liga de la Justicia."
    },
    {
      nombre: "Clark Kent",
      alias: "Superman",
      casa: "DC",
      aparicion: 1938,
      resumen: "El Hombre de Acero, protector de la Tierra.",
      descripcion: "Clark Kent, nacido como Kal-El en el planeta Krypton, es Superman, uno de los superhéroes más poderosos del universo. Con habilidades como superfuerza, vuelo, visión láser y más, lucha por la verdad, la justicia y la esperanza como símbolo de la paz global y miembro central de la Liga de la Justicia."
    },
    {
      nombre: "Tony Stark",
      alias: "Iron Man",
      casa: "Marvel",
      aparicion: 1963,
      resumen: "Genio, millonario, playboy, filántropo.",
      descripcion: "Anthony Edward Stark es Iron Man, un inventor brillante y CEO de Stark Industries. Después de un accidente que le dejó fragmentos de metralla cerca del corazón, construyó una armadura de alta tecnología para sobrevivir y posteriormente evolucionó como héroe. Miembro fundador de los Vengadores y defensor del planeta usando la ciencia como arma."
    },
    {
      nombre: "Peter Parker",
      alias: "Spider-Man",
      casa: "Marvel",
      aparicion: 1962,
      resumen: "El amistoso vecino Spider-Man.",
      descripcion: "Peter Parker es un joven neoyorquino que obtiene poderes arácnidos tras ser mordido por una araña radioactiva. Con fuerza, agilidad y sentido arácnido, combate el crimen mientras equilibra su vida personal, estudios y trabajo. 'Un gran poder conlleva una gran responsabilidad' es su lema eterno."
    },
    {
      nombre: "Diana Prince",
      alias: "Wonder Woman",
      casa: "DC",
      aparicion: 1941,
      resumen: "Guerrera amazona, embajadora de paz.",
      descripcion: "Diana Prince es Wonder Woman, princesa de las Amazonas de Themyscira. Dotada de fuerza sobrehumana, inmortalidad parcial y armas mágicas como el Lazo de la Verdad y los brazaletes indestructibles, lucha por la justicia, la igualdad y la paz. Es uno de los pilares de la Liga de la Justicia."
    },
    {
      nombre: "Steve Rogers",
      alias: " Capitán América",
      casa: "Marvel",
      aparicion: 1941,
      resumen: " Súper soldado patriótico.",
      descripcion: "Steve Rogers fue un joven frágil transformado en un supersoldado gracias a un experimento del gobierno estadounidense durante la Segunda Guerra Mundial. Como Capitán América, lucha por la justicia, lidera a los Vengadores y es un símbolo de valor, sacrificio y principios firmes."
    },
    {
      nombre: "Barbara Gordon",
      alias: "Batgirl",
      casa: "DC",
      aparicion: 1967,
      resumen: "Heroína brillante y tenaz.",
      descripcion: "Hija del comisionado Gordon, Barbara tomó el manto de Batgirl para luchar contra el crimen en Gotham. Tras quedar parapléjica por el Joker, se reinventó como Oracle, una hacker e informante clave para la comunidad de superhéroes, demostrando que su verdadero poder es su inteligencia y determinación."
    },
    {
      nombre: "Reed Richards",
      alias: "Mr. Fantastic",
      casa: "Marvel",
      aparicion: 1961,
      resumen: "El hombre más elástico y uno de los más inteligentes.",
      descripcion: "Reed Richards es el líder de los Cuatro Fantásticos. Después de un accidente cósmico, desarrolló la capacidad de estirar su cuerpo a formas imposibles. Es un genio científico dedicado a resolver problemas a escala mundial y cósmica, utilizando su intelecto y habilidades junto a su equipo."
    }
  ];
const input = document.getElementById("buscador")
const result = document.getElementById("resultado")
  class HeroCard extends HTMLElement{
    constructor(){
      super();
      this.attachShadow({mode:"open"})
    }

    set hero(data){
      this.render(data)
    }

    render(hero){
 const wrapper = document.createElement('div')

      const style = document.createElement('style')

      wrapper.innerHTML = /* html */ `
      <div class="card">
        <div class="alias">${hero.alias}</div>
        <div class="nombre">(${hero.nombre})</div>
        <div class="casa">${hero.casa} - ${hero.aparicion}</div>
        <p><strong>${hero.resumen}</strong></p>
        <button id="ver-mas">Ver más</button>
      </div>
      `

      style.textContent = /* css */ `
      .card {
        background: #fff;
        border: 2px solid ${hero.casa === "DC" ? "#0a74da" : "#e62429"};
        border-radius: 1rem;
        padding: 1rem;
        max-width: 400px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        font-family: sans-serif;
        margin-top: 1rem;
      }
      .alias {
        font-size: 1.5rem;
        font-weight: bold;
      }
      .nombre {
        font-style: italic;
        color: #555;
      }
      .casa {
        font-weight: bold;
        margin: 0.5rem 0;
        color: ${hero.casa === "DC" ? "#0a74da" : "#e62429"};
      }
      button {
        margin-top: 1rem;
        padding: 0.5rem 1rem;
        border: none;
        background: ${hero.casa === "DC" ? "#0a74da" : "#e62429"};
        color: white;
        border-radius: 0.5rem;
        cursor: pointer;
        font-weight: bold;
      }
      `
      
      this.shadowRoot.innerHTML = "";
      this.shadowRoot.appendChild(style)
      this.shadowRoot.appendChild(wrapper)

      const btn = wrapper.querySelector("#ver-mas");
      btn.addEventListener("click", () => {
        Swal.fire({
          title: hero.alias,
          html: `<p>${hero.descripcion}</p>`,
          icon: 'info',
          confirmButtonText: 'Cerrar',
          background: '#fefefe',
          confirmButtonColor: hero.casa === "DC" ? "#0a74da" : "#e62429"
        });
      });
    }  

    
  }
  customElements.define("hero-card", HeroCard)

  input.addEventListener("input", () =>{
    const query = input.value.trim().toLowerCase();
    result.innerHTML = "";

    if(query ==="") return;

    const found = heroes.filter( h=>
      h.alias.toLocaleLowerCase().startsWith(query) || h.nombre.toLocaleLowerCase().startsWith(query)
    )

    if (found.length >= 1) {
 
      found.forEach(hero => {
        const card = document.createElement("hero-card");
        card.hero = hero;
        result.appendChild(card);
      });
    }
    else if(found.length ===0){
      result.innerHTML =`
      <h1>No se encontraron coincidencias<h1>
      `
      return
    }
  });