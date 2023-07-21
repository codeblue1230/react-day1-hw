import { createSlice } from "@reduxjs/toolkit";


export interface GameState {
    name: string;
    description: string;
    price: number;
    system: string;
    year_made: number;
    genre: string
}

const initialState: GameState = {
    name: '',
    description: '',
    price: 0,
    system: '',
    year_made: 0,
    genre: ''
}

const rootSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        chooseName: (state, action) => { state.name = action.payload },
        chooseDescription: (state, action) => { state.description = action.payload },
        choosePrice: (state, action) => { state.price = action.payload },
        chooseSystem: (state, action) => { state.system = action.payload },
        chooseYear: (state, action) => { state.year_made = action.payload },
        chooseGenre: (state, action) => { state.genre = action.payload }
    }
})

// Export Reducers
export const reducer = rootSlice.reducer
console.log(rootSlice)
export const {
    chooseName,
    chooseDescription,
    choosePrice,
    chooseSystem,
    chooseYear,
    chooseGenre
} = rootSlice.actions