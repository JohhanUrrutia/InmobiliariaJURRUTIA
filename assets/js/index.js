const propiedadesJSON = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
      m: 170
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      m: 130
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      m: 80
    },
    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      m: 6
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      m: 200
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/FJYA5LJ4PNEIVNBUDMQ66KV6UQ.jpg",
      rooms: 5,
      m: 500
    }
  ];

  const BtnBuscar = document.getElementById('BtnBuscar');
  let PropiedadesDOM = document.getElementById('propiedades');
  let CantidadCuartos = document.getElementById('CantidadCuartos');
  let Desdem2 = document.getElementById('Desdem2');
  let Hastam2 = document.getElementById('Hastam2');
  let totalCasas = document.getElementById('totalCasas');

  

  BtnBuscar.addEventListener('click',()=>{

    PropiedadesDOM.innerHTML = ""

    if ((parseFloat(CantidadCuartos.value) === 0) || (0 === parseFloat(Desdem2.value)) || (0 === parseFloat(Hastam2.value))){
      alert("Favor rellena todos los campos.")
    }

    let conteoCasas = 0

    for(let casa of propiedadesJSON){

      let pintarCasas = () => {
        PropiedadesDOM.innerHTML += `<div class="propiedad">
          <div class="img" style="background-image: url(${casa.src})"></div>
            <section>
                <h5>${casa.name}</h5>
                <div class="d-flex justify-content-between">
                    <p>Cuartos: ${casa.rooms}</p>
                    <p>Metros: ${casa.m}</p>
                </div>
                <p class="my-3">${casa.description}</p>
                <button class="btn btn-info ">Ver más</button>
            </section>
          </div>`

          conteoCasas += 1
      };

      let CondicionFiltro = ((parseFloat(CantidadCuartos.value) <= casa.rooms) && (casa.m >= parseFloat(Desdem2.value)) && (casa.m <= parseFloat(Hastam2.value)));


      if (CondicionFiltro) {
        pintarCasas();
        totalCasas.innerHTML = `Total: ${conteoCasas}`;
        
      }
      
    }

  });

  



  