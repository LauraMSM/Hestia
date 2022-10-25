const startBtn = $(".start-btn");
const advContainer = $(".advantages");
const disadvContainer = $(".disadvantages");
let started = 0;


const hestiaPros = () => {
    const pros = [
        "Desarrollo activo",
        "Actualziaciones frecuentes y, por tanto, mayor número de novedades, además de correcciones de errores",
        "Selección entre múltiples versiones de PHP, incluso de las últimas",
        "Protocolo HTTP/2 por defecto",
        "Explorador de archivos integrado en el panel",
        "Sistema de caché avanzado integrado que mejora el rendimiento de las páginas web notablemente"
    ];

    return pros;
};

const vestaPros = () => {
    const pros = [
        "Da soporte a más sistemas operativos",
        "Mayor tiempo en desarrollo"
    ];

    return pros;
};

const timeOutArr = (array, container) => {
    if ( started <= 2 ) {
        array.forEach((e, i) => {
            setTimeout(() => {
                container.innerHTML += `
                <div class="vs-item">
                    <p>${e}</p>
                </div>
            `;
            }, i * 1500);
        });
    };

    started++;
};

startBtn.addEventListener("click", () => {
    timeOutArr(hestiaPros(), advContainer);
    timeOutArr(vestaPros(), disadvContainer); 
});
