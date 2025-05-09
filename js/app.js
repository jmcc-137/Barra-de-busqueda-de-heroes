const heroes = [
    {
      img:"/img/batman.jpeg",
      icon:"/img/icon batmat.jpeg",
      nombre: "Bruce Wayne",
      alias: "Batman",
      casa: "DC",
      aparicion: 1939,
      resumen: "Millonario de día, vigilante de noche.",
      descripcion: "Bruce Wayne, también conocido como Batman, es un justiciero sin poderes que protege Gotham City usando su intelecto, habilidades de combate, y tecnología avanzada. Motivado por el asesinato de sus padres, lucha contra el crimen desde las sombras como uno de los miembros fundadores de la Liga de la Justicia."
    },
    {
      img:"/img/superman.jpeg",
      icon:"/img/icon superman.jpeg",
      nombre: "Clark Kent",
      alias: "Superman",
      casa: "DC",
      aparicion: 1938,
      resumen: "El Hombre de Acero, protector de la Tierra.",
      descripcion: "Clark Kent, nacido como Kal-El en el planeta Krypton, es Superman, uno de los superhéroes más poderosos del universo. Con habilidades como superfuerza, vuelo, visión láser y más, lucha por la verdad, la justicia y la esperanza como símbolo de la paz global y miembro central de la Liga de la Justicia."
    },
    {
      img :"/img/ironman.jpeg",
      icon:"/img/icon ironman.jpeg",
      nombre: "Tony Stark",
      alias: "Iron Man",
      casa: "Marvel",
      aparicion: 1963,
      resumen: "Genio, millonario, playboy, filántropo.",
      descripcion: "Anthony Edward Stark es Iron Man, un inventor brillante y CEO de Stark Industries. Después de un accidente que le dejó fragmentos de metralla cerca del corazón, construyó una armadura de alta tecnología para sobrevivir y posteriormente evolucionó como héroe. Miembro fundador de los Vengadores y defensor del planeta usando la ciencia como arma."
    },
    {
      icon:"/img/icon spiderman.jpeg",
      img:"/img/spiderman.jpeg",
      nombre: "Peter Parker",
      alias: "Spider-Man",
      casa: "Marvel",
      aparicion: 1962,
      resumen: "El amistoso vecino Spider-Man.",
      descripcion: "Peter Parker es un joven neoyorquino que obtiene poderes arácnidos tras ser mordido por una araña radioactiva. Con fuerza, agilidad y sentido arácnido, combate el crimen mientras equilibra su vida personal, estudios y trabajo. 'Un gran poder conlleva una gran responsabilidad' es su lema eterno."
    },
    {
      img:"/img/wonder woman.jpeg",
      icon:"/img/icon wonder.jpeg",
      nombre: "Diana Prince",
      alias: "Wonder Woman",
      casa: "DC",
      aparicion: 1941,
      resumen: "Guerrera amazona, embajadora de paz.",
      descripcion: "Diana Prince es Wonder Woman, princesa de las Amazonas de Themyscira. Dotada de fuerza sobrehumana, inmortalidad parcial y armas mágicas como el Lazo de la Verdad y los brazaletes indestructibles, lucha por la justicia, la igualdad y la paz. Es uno de los pilares de la Liga de la Justicia."
    },
    {
      img:"/img/CapitanAmerica.jpeg",
      icon:"/img/icon Capitan.jpeg",
      nombre: "Steve Rogers",
      alias: "Capitán América",
      casa: "Marvel",
      aparicion: 1941,
      resumen: " Súper soldado patriótico.",
      descripcion: "Steve Rogers fue un joven frágil transformado en un supersoldado gracias a un experimento del gobierno estadounidense durante la Segunda Guerra Mundial. Como Capitán América, lucha por la justicia, lidera a los Vengadores y es un símbolo de valor, sacrificio y principios firmes."
    },
    {
      img:"/img/batgirl.jpeg",
      icon:"/img/icon batgirl.jpeg",
      nombre: "Barbara Gordon",
      alias: "Batgirl",
      casa: "DC",
      aparicion: 1967,
      resumen: "Heroína brillante y tenaz.",
      descripcion: "Hija del comisionado Gordon, Barbara tomó el manto de Batgirl para luchar contra el crimen en Gotham. Tras quedar parapléjica por el Joker, se reinventó como Oracle, una hacker e informante clave para la comunidad de superhéroes, demostrando que su verdadero poder es su inteligencia y determinación."
    },
    {
      img:"/img/mr.fantastic.jpeg",
      icon:"/img/icon mr.fantastic.jpeg",
      nombre: "Reed Richards",
      alias: "Mr. Fantastic",
      casa: "Marvel",
      aparicion: 1961,
      resumen: "El hombre más elástico y uno de los más inteligentes.",
      descripcion: "Reed Richards es el líder de los Cuatro Fantásticos. Después de un accidente cósmico, desarrolló la capacidad de estirar su cuerpo a formas imposibles. Es un genio científico dedicado a resolver problemas a escala mundial y cósmica, utilizando su intelecto y habilidades junto a su equipo."
    },
    {
      img:"/img/dr.strange.jpeg",
      icon:"/img/icon dr.strange.jpeg",
      nombre: "Stephen Strange",
      alias: "Doctor Strange",
      casa: "Marvel",
      aparicion: 1963,
      resumen: "Hechicero Supremo y guardián de las artes místicas.",
      descripcion: "Stephen Strange fue un neurocirujano talentoso hasta que un accidente le cambió la vida. Se convirtió en el Hechicero Supremo, usando sus conocimientos mágicos para proteger el mundo de amenazas sobrenaturales."
    },
    {
      img:"/img/flash.jpeg",
      icon:"/img/icon flash.jpeg",
      nombre: "Barry Allen",
      alias: "Flash",
      casa: "DC",
      aparicion: 1956,
      resumen: "El hombre más rápido del mundo.",
      descripcion: "Barry Allen, tras un accidente con químicos y un rayo, obtiene velocidad sobrehumana. Como Flash, protege Central City y es miembro clave de la Liga de la Justicia."
    },
    {
      img:"/img/blackwidow.jpeg",
      icon:"/img/icon black.jpeg",
      nombre: "Natasha Romanoff",
      alias: "Black Widow",
      casa: "Marvel",
      aparicion: 1964,
      resumen: "Espía mortal con un pasado misterioso.",
      descripcion: "Entrenada en la Sala Roja, Natasha es una experta en combate, espionaje y tecnología. Redimida, se convierte en una pieza esencial de los Vengadores."
    },
    {
      img:"/img/greenlantern.jpeg",
      icon:"/img/icon green.jpeg",
      nombre: "Hal Jordan",
      alias: "Green Lantern",
      casa: "DC",
      aparicion: 1959,
      resumen: "Portador del anillo más poderoso del universo.",
      descripcion: "Hal Jordan es un piloto que se convierte en Green Lantern, usando un anillo de poder alimentado por su voluntad para defender el universo como miembro de los Green Lantern Corps."
    },
    {
      img:"/img/blackpanter.jpeg",
      icon:"/img/icon panter.jpeg",
      nombre: "T'Challa",
      alias: "Black Panther",
      casa: "Marvel",
      aparicion: 1966,
      resumen: "Rey de Wakanda y guerrero imparable.",
      descripcion: "T'Challa es el líder de Wakanda, nación avanzada tecnológicamente. Con el poder del corazón de hierba y un traje de vibranio, combate el mal como Black Panther."
    },
    {
      img:"/img/Acuaman.jpeg",
      icon:"/img/icon acuaman.jpeg",
      nombre: "Arthur Curry",
      alias: "Aquaman",
      casa: "DC",
      aparicion: 1941,
      resumen: "Rey de Atlantis y defensor de los océanos.",
      descripcion: "Mitad humano, mitad atlante, Aquaman controla el agua, se comunica con criaturas marinas y defiende tanto la superficie como los mares del planeta."
    },
    {
      img:"/img/starlord.jpeg",
      icon:"/img/icon star.jpeg",
      nombre: "Peter Quill",
      alias: "Star-Lord",
      casa: "Marvel",
      aparicion: 1976,
      resumen: "Líder de los Guardianes de la Galaxia.",
      descripcion: "Hijo de un alienígena y una humana, Peter es un aventurero espacial con gran sentido del humor, líder de un equipo que protege la galaxia de amenazas cósmicas."
    },
    {
      img:"/img/cyborg.jpeg",
      icon:"/img/icon cyborg.jpeg",
      nombre: "Victor Stone",
      alias: "Cyborg",
      casa: "DC",
      aparicion: 1980,
      resumen: "Humano mejorado con tecnología alienígena.",
      descripcion: "Victor fue salvado con tecnología avanzada después de un accidente. Ahora es Cyborg, mitad máquina, mitad humano, con múltiples habilidades tecnológicas y miembro de la Liga de la Justicia."
    },
    {
      img:"/img/hulk.jpeg",
      icon:"/img/icon hulk.jpeg",
      nombre: "Bruce Banner",
      alias: "Hulk",
      casa: "Marvel",
      aparicion: 1962,
      resumen: "Científico con una ira monstruosa.",
      descripcion: "Bruce Banner se transforma en Hulk cuando se enfurece, convirtiéndose en una fuerza imparable. Aunque lucha con su identidad, ha salvado al mundo incontables veces."
    },
    {
      img:"/img/constantine.jpeg",
      icon:"/img/icon constantine.jpeg",
      nombre: "John Constantine",
      alias: "Constantine",
      casa: "DC",
      aparicion: 1985,
      resumen: "Hechicero cínico con alma atormentada.",
      descripcion: "Detective de lo oculto, Constantine usa magia, trampas y su astucia para enfrentar demonios, fantasmas y entidades sobrenaturales, a menudo a un gran costo personal."
    },
    {
      img:"/img/witch.jpeg",
      icon:"/img/icon witch.jpeg",
      nombre:"Wanda Maximoff",
      alias: "Scarlet Witch",
      casa: "Marvel",
      aparicion: 1964,
      resumen: "Poderosa hechicera capaz de alterar la realidad.",
      descripcion: "Wanda es una mutante y usuaria de magia del caos. Ha sido tanto heroína como amenaza, luchando por controlar su inmenso poder emocional y destructivo."
    },
    {
      img:"/img/zatanna.jpeg",
      icon:"/img/icon zatanna.jpeg",
      nombre: "Zatanna Zatara",
      alias: "Zatanna",
      casa: "DC",
      aparicion: 1964,
      resumen: "Hechicera que conjura con palabras al revés.",
      descripcion: "Zatanna es una ilusionista y maga real que combate el mal usando magia auténtica, invocando hechizos mediante frases al revés. Es hija de un poderoso mago y miembro de la Liga de la Justicia Oscura."
    },
    {
      img:"/img/cat.jpeg",
      icon:"/img/icon cat.jpeg",
      nombre: "Selina Kyle",
      alias: "Catwoman",
      casa: "DC",
      aparicion: 1940,
      resumen: "Antihéroe ágil y escurridiza.",
      descripcion: "Selina es una ladrona con un fuerte código moral. Aunque a veces antagonista, su relación con Batman y sus acciones han demostrado su lado heroico."
    },
    {
      img:"/img/Marvel.jpeg",
      icon:"/img/icon marvel.jpeg",
      nombre: "Carol Danvers",
      alias: "Captain Marvel",
      casa: "Marvel",
      aparicion: 1968,
      resumen: "Heroína cósmica con poder explosivo.",
      descripcion: "Piloto de la Fuerza Aérea, Carol obtiene poderes tras un accidente con tecnología alienígena. Se convierte en una de las heroínas más poderosas del universo."
    },
    {
      img:"/img/night.jpeg",
      icon:"/img/icon night.jpeg",
      nombre: "Dick Grayson",
      alias: "Nightwing",
      casa: "DC",
      aparicion: 1984,
      resumen: "Ex-Robin convertido en líder independiente.",
      descripcion: "Dick Grayson fue el primer Robin, y luego evolucionó a Nightwing. Con entrenamiento de Batman, lidera a los Jóvenes Titanes y protege Blüdhaven."
    },
    { img:"/img/dar.jpeg",
      icon:"/img/icon dar.jpeg",
      nombre: "Matt Murdock",
      alias: "Daredevil",
      casa: "Marvel",
      aparicion: 1964,
      resumen: "Abogado ciego con sentidos sobrehumanos.",
      descripcion: "Matt quedó ciego en un accidente químico, que potenció sus otros sentidos. De día abogado, de noche vigilante en Hell’s Kitchen, lucha contra el crimen con acrobacias y coraje."
    },
    {
      img:"/img/martian.jpeg",
      icon:"/img/icon martian.jpeg",
      nombre: "J'onn J'onzz",
      alias: "Martian Manhunter",
      casa: "DC",
      aparicion: 1955,
      resumen: "Último marciano y poderoso telépata.",
      descripcion: "J'onn es un marciano verde con habilidades como telepatía, intangibilidad y cambio de forma. Es un miembro clave de la Liga de la Justicia con profundo sentido de justicia."
    },
    {
      img:"/img/ant.jpeg",
      icon:"/img/icon ant.jpeg",
      nombre: "Scott Lang",
      alias: "Ant-Man",
      casa: "Marvel",
      aparicion: 1979,
      resumen: "Héroe que puede encogerse y crecer.",
      descripcion: "Scott Lang toma el manto de Ant-Man usando tecnología de Hank Pym. Con humor y corazón, lucha contra el crimen a tamaños microscópicos y gigantescos."
    },
    {
      img:"/img/supergirl.jpeg",
      icon:"/img/icon supergirl.jpeg",
      nombre: "Kara Zor-El",
      alias: "Supergirl",
      casa: "DC",
      aparicion: 1959,
      resumen: "Prima de Superman con poderes equivalentes.",
      descripcion: "Kara es una kryptoniana enviada para proteger a su primo Kal-El. Con fuerza, velocidad y visión láser, lucha por la justicia con determinación."
    },
    {
      img:"/img/wolverine.jpeg",
      icon:"/img/icon wolverin.jpeg",
      nombre: "Logan",
      alias: "Wolverine",
      casa: "Marvel",
      aparicion: 1974,
      resumen: "Mutante con garras y factor de curación.",
      descripcion: "Wolverine es un mutante endurecido por guerras y traumas. Con garras retráctiles, sentido animal y un factor regenerativo, es uno de los X-Men más temidos y queridos."
    }
    
  ];

  


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
        <div class="img"><img src="${hero.img}"></div>
        <br>
        <div class="alias">${hero.alias}</div>
        <div class="nombre">(${hero.nombre})</div>
        <div class="casa">${hero.casa} - ${hero.aparicion}</div>
        <p><strong>${hero.resumen}</strong></p>
        <button id="ver-mas">Ver más</button>
      </div>
      `

      style.textContent = /* css */ `
      @import url('https://fonts.googleapis.com/css2?family=Boogaloo&display=swap');
        .boogaloo-regular {
        font-family: "Boogaloo", sans-serif;
        font-weight: 600;
        font-style: normal;
      }
  

      *{
          padding: 0;
          box-sizing: border-box;
          font-family: "Boogaloo", sans-serif;
          justify-content:center;
      }
      .card {
        
        text-align: center;
        background: #0a1c20;
        border: 2px solid ${hero.casa === "DC" ? "#0a74da" : "#e62429"};
        border-radius: 1rem;
        padding: 1rem;
        max-width: 250px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        margin-top: 1rem;
        color: #41a6de;
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
      
        .img{
        display:flex;
        justify-content: center;
        }
        img{
        width: 25vh;
        border-radius: 20px;
        margin:0;
        border: solid;
        box-shadow: ${hero.casa === "DC" ? "0 4px 12px rgba(27, 146, 175, 0.9);" : "0 4px 12px rgba(209, 15, 8, 0.9);"}; 
        transform: ${hero.casa ==="DC" ? "rotate(-4deg)": "rotate(4deg)"};
       
        }
        
      `
      
      this.shadowRoot.innerHTML = "";
      this.shadowRoot.appendChild(style)
      this.shadowRoot.appendChild(wrapper)

      const btn = wrapper.querySelector("#ver-mas");
      btn.addEventListener("click", () => {
        Swal.fire({
          title: hero.alias,
          html: `
           <div style="display: flex; align-items: flex-start; gap: 20px; text-align: left;">
            <img src="${hero.img}" alt="${hero.nombre}" style="width: 250px; height: auto; border-radius: 10px;" />
            <div>
              <p><strong>Alias:</strong> ${hero.alias}</p>
              <p><strong>Casa:</strong> ${hero.casa}</p>
              <p><strong>Aparición:</strong> ${hero.aparicion}</p>
              <p><strong>Descripción:</strong><br>${hero.descripcion}</p>
            </div>
          </div>
          
          `
          
          ,

          
          confirmButtonText: 'Cerrar',
          with:'700px',
          confirmButtonColor: hero.casa === "DC" ? "#e62429": "#0a74da",
          background:  hero.casa === "DC" ? "#0a74da" : "#e62429",
          cumtomClasss:{
            popup:'custom-swal-popup'
          }
          
        });
      });
    
    }  

    
  }

  customElements.define("hero-card", HeroCard)

  class SearchBar extends HTMLElement{
    constructor(){
      super();
      this.attachShadow({mode:"open"});
    }
    connectedCallback(){
      this.render();
    }

    render(){
      const wrapper= document.createElement("div")
     const style =document.createElement("style")

      wrapper.innerHTML=`
       <input type="text" placeholder="Buscar héroe..." / required>
      `

      style.textContent = `
      input {
          width: 100%;
          max-width: 300px;
          padding: 0.5rem 1rem;
          border: 2px solid #ccc;
          border-radius: 1rem;
          font-size: 1rem;
          outline: none;
          font-family: sans-serif;
        }
      
      `
      const input = wrapper.querySelector("input");
      input.addEventListener("input", () =>{
        this.dispatchEvent(new CustomEvent("search-change", {
          detail: input.value,
          bubbles:true,
          composed:true,
        }));

      });
      this.shadowRoot.innerHTML = "";
      this.shadowRoot.appendChild(style)
      this.shadowRoot.appendChild(wrapper)
    }
  }
  customElements.define("search-bar", SearchBar)
  
  const result = document.getElementById("resultado")
  const search = document.querySelector("search-bar")
  search.addEventListener("search-change", (e) =>{

    const query = e.detail.trim().toLowerCase();
    result.innerHTML = "";

    if(query ==="") return;

    const found = heroes.filter( h=>
      h.alias.toLocaleLowerCase().startsWith(query) 
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