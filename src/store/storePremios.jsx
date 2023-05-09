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

/* esta store setea los premios en localstorage y trabaja con ellos desde ahi */
const useStorePremios = create((set, get) => ({
    premios: JSON.parse(localStorage.getItem('premios')) || premios,
    setPremios: (premios) => set({ premios }),
    addPremio: (premio) => set((state) => ({ premios: [...state.premios, premio] })),
    removePremio: (id) => set((state) => ({ premios: state.premios.filter(premio => premio.id !== id) })),
    updatePremio: (id, premio) => set((state) => ({
        premios: state.premios.map((premio) => {
            if (premio.id === id) {
                return {
                    ...premio,
                    ...premio,
                };
            }
            return premio;
        })
    })),
    getPremio: (id) => set((state) => state.premios.find(premio => premio.id === id)),
}));

export default useStorePremios;
