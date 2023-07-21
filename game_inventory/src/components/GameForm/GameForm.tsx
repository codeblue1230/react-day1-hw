// External Imports
import React from 'react';
import { useDispatch, useStore } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@mui/material';

// Internal Imports
import {
    chooseName,
    chooseDescription,
    choosePrice,
    chooseSystem,
    chooseYear,
    chooseGenre,
    GameState
} from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input'
import { serverCalls } from '../../api';
// import { useGetData } from '../../custom-hooks/FetchData';

interface GameFormProps {
    id?: string
    data?: GameState
}

export const GameForm = (props: GameFormProps) => {
    const dispatch = useDispatch();
    // const { gameData, getData } = useGetData()
    const store = useStore()
    const { register, handleSubmit } = useForm<GameState>({})

    const onSubmit: SubmitHandler<GameState> =  async(data, event) => {
        if (event) event?.preventDefault()
        
        if (props.id) {
            await serverCalls.update(props.id, data)
            console.log(`Updated game: ${data.name}`);
            window.location.reload()
            if (event) event.currentTarget.reset()
        } else {
            dispatch(chooseName(data.name))
            dispatch(chooseDescription(data.description))
            dispatch(choosePrice(data.price))
            dispatch(chooseSystem(data.system))
            dispatch(chooseYear(data.year_made))
            dispatch(chooseGenre(data.genre))

            console.log(store.getState())

            await serverCalls.create(store.getState() as GameState)
            window.location.reload()
            if (event) event.currentTarget.reset()
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor='name'>Game Name</label>
                    <Input {...register('name')} name='name' placeholder='Name Here'/>
                </div>
                <div>
                    <label htmlFor='description'>Game Description</label>
                    <Input {...register('description')} name='description' placeholder='Game Description Here'/>
                </div>
                <div>
                    <label htmlFor='price'>Price</label>
                    <Input {...register('price')} name='price' placeholder='Price Here'/>
                </div>
                <div>
                    <label htmlFor='system'>System</label>
                    <Input {...register('system')} name='system' placeholder='System Here'/>
                </div>
                <div>
                    <label htmlFor='year_made'>Year Made</label>
                    <Input {...register('year_made')} name='year_made' placeholder='Year Made Here'/>
                </div>
                <div>
                    <label htmlFor='genre'>Genre</label>
                    <Input {...register('genre')} name='genre' placeholder='Genre Here'/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}