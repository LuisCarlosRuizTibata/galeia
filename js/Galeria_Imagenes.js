var titulo = document.querySelector('.tituloImg');
var descripcion = document.querySelector('.descripcionImg');
var foto = document.querySelector(".imagen");
let texto = [
    'Ab veniam error ad doloremque?',
    'Similique illo corrupti facilis exercitationem?',
    'Sit adipisci eum quibusdam tempora?',
    'Accusamu Tenetur, quo nam.',
    'Ad ut ipsam alias? Deserunt.',
    'Corporis magnam laudantium quaerat amet.',
    'Error beatae blanditiis facilis. Aspernatur.',
    'Laborum quae dolores autem fuga!',
    'Commodi dolorum corporis sequi enim.',
    'Accusamus, autem? Tenetur, quo nam.'
];
var numero=1;

actualizarGalery(numero);

function adelantar() {
    numero++;
    if(numero>10){
        numero=1;
    }
    actualizarGalery(numero);
};
function retroceder() {
    numero--;
    if(numero<1)  {
        numero=10;
    }
    actualizarGalery(numero);
};

function actualizarGalery(num) {
    titulo.innerHTML = 'Fotografia '+num;
    descripcion.innerHTML = texto[num - 1];
    foto.src = "Imagenes/foto"+ num + ".jpg";
}
