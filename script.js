let alumno = document.querySelector('#alumno');
const btn = document.querySelector('#btn-random');

let listaAlumno = ['ALAN JESUS RAMOS MARTINEZ',
                   'ALBERTO PEREYRA MARTINEZ',
                   'ANDREA GALLARDO RAMIREZ',
                   'ANDREA RAMOS SOTO',
                   'ANGEL PAOLO CONTRERAS HUERTA',
                   'ARANTZA ABIGAIL MORALES PAITA',
                   'ARIAN DE JESUS BALDERRAMA VALLEJO',
                   'GABRIELA MORENO JUAREZ',
                   'HECTOR DAMIAN HERRERA SOSA',
                   'JAVIER CHAVEZ CRUZ',
                   'JESUS SANTIAGO TORRES CAMPOS',
                   'JOSE LUIS GONZALEZ PELCASTRE',
                   'JOSE INES SEQUERA TORRES',
                   'LUISA KAMILA CASTAÑEDA RAGA',
                   'MARTIN ARREOLA MENDEZ',
                   'MELISSA GABRIELA GARCIA GARCIA',
                   'VALENTINA FIGUEROA GUTIERREZ' ];

btn.addEventListener('click', funcionRandom);

function funcionRandom(){
    alumno.innerHTML = listaAlumno[Math.floor(Math.random() * listaAlumno.length)]; 
}
