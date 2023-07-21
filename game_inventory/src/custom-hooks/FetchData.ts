import React, { useState, useEffect } from 'react';
import { serverCalls } from '../api';
import { GameState } from '../redux/slices/rootSlice';
// import our Game interface


export const useGetData = () => {
    const [gameData, setData] = useState<GameState[]>([]); 

    async function handleDataFetch() {
        const result = await serverCalls.get()
        setData(result)
    }

    useEffect( () => {
        handleDataFetch()
    }, [])

    return {gameData, getData: handleDataFetch}

}