interface Grupo {
    nombre_grupo_cantante_compositor: string;
    añoFundacion: number;
    activo: boolean;
    generoMusical: string;
}

const rock = "🎸 Rock";
const poprock = "🎵 Pop Rock";
const clasica = "🎼 Clasica";
const hardRock = "🤘 Hard Rock";

const estiloNombre = "background-color: green; font-size: 20px; font-weight: bold";

const grupoA: Grupo = {
    nombre_grupo_cantante_compositor: "The Beatles",
    añoFundacion: 1960,
    activo: true,
    generoMusical: `${poprock}`
}

const grupoB: Grupo = {
    nombre_grupo_cantante_compositor: "Queen",
    añoFundacion: 1970,
    activo: false,
    generoMusical: `${rock} `,
}
const grupoC: Grupo = {
    nombre_grupo_cantante_compositor: "AC DC",
    añoFundacion: 1973,
    activo: true,
    generoMusical: ` ${hardRock }`,
}
const grupoD: Grupo = {
    nombre_grupo_cantante_compositor: "Ludwig va Beethoven",
    añoFundacion: 1770,
    activo: false,
    generoMusical: `${clasica}`,
}
const grupoE: Grupo = {
    nombre_grupo_cantante_compositor: "The Rolling Stones",
    añoFundacion: 1962,
    activo: true,
    generoMusical: `${rock}`,
}

console.log(`%c${grupoA.nombre_grupo_cantante_compositor}`,estiloNombre);console.log(`${grupoA.añoFundacion}`);console.log(`Activo: ${grupoA.activo}`);console.log(`${grupoA.generoMusical}`);
console.log(`%c${grupoB.nombre_grupo_cantante_compositor}`,estiloNombre);console.log(`${grupoB.añoFundacion}`);console.log(`Activo: ${grupoB.activo}`);console.log(`${grupoB.generoMusical}`);
console.log(`%c${grupoC.nombre_grupo_cantante_compositor}`,estiloNombre);console.log(`${grupoC.añoFundacion}`);console.log(`Activo: ${grupoC.activo}`);console.log(`${grupoC.generoMusical}`);
console.log(`%c${grupoD.nombre_grupo_cantante_compositor}`,estiloNombre);console.log(`${grupoD.añoFundacion}`);console.log(`Activo: ${grupoD.activo}`);console.log(`${grupoD.generoMusical}`);
console.log(`%c${grupoE.nombre_grupo_cantante_compositor}`,estiloNombre);console.log(`${grupoE.añoFundacion}`);console.log(`Activo: ${grupoE.activo}`);console.log(`${grupoE.generoMusical}`);

