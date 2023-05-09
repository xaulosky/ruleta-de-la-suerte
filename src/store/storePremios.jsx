import create from 'zustand';

const premios = [
    {
        id: 1,
        nombre: 'LLAVERO',
        cantidad: 25,

    },
    {
        id: 2,
        nombre: 'STICKER',
        cantidad: 30,
    },
    {
        id: 3,
        nombre: 'BOTELLA',
        cantidad: 15,
    },
    {
        id: 4,
        nombre: 'POSTALES',
        cantidad: 120,
    },
    {
        id: 5,
        nombre: 'CHOAPINO',
        cantidad: 25,
    }
]



/* consulta el dia mes y año, si no existe lo crea y si existe y es distinta a la actual crea los premios en local storage */
const fecha = new Date();
const dia = fecha.getDate();
const mes = fecha.getMonth() + 1;
const año = fecha.getFullYear();

const fechaActual = `${dia}/${mes}/${año}`
const fechaLocalStorage = localStorage.getItem('fecha')

if (fechaLocalStorage === null) {
    localStorage.setItem('fecha', fechaActual)
    localStorage.setItem('premios', JSON.stringify(premios))
} else if (fechaLocalStorage !== fechaActual) {
    localStorage.setItem('fecha', fechaActual)
    localStorage.setItem('premios', JSON.stringify(premios))
}



/* esta store setea los premios en localstorage y trabaja con ellos desde ahi */

const useStorePremios = create((set, get) => ({
    premios: JSON.parse(localStorage.getItem('premios')),
    setPremios: (premios) => set({ premios }),
    setPremiosLocalStorage: (premios) => {
        localStorage.setItem('premios', JSON.stringify(premios))
        set({ premios })
    }
}));

export default useStorePremios;
