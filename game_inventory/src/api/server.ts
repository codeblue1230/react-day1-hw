let token = '697e8e1b2aaa40cad9425a4460d3abedd9f4634d13666909'
import { GameState } from "../redux/slices/rootSlice";


export const serverCalls = {
    get: async () => {
        const response = await fetch(`https://marcgame121.glitch.me/api/games`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data'), response.status
        }

        return await response.json()
    },
    create: async(data: GameState) => {
        const response = await fetch(`https://marcgame121.glitch.me/api/games`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },

            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to create data on server'), response.status
        }

        return await response.json()
    },
    update: async(id: string, data: GameState) => {
        const response = await fetch(`https://marcgame121.glitch.me/api/games/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },

            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to create data on server'), response.status
        }

        return await response.json()
    },
    delete: async(id: string) => {
        const response = await fetch(`https://marcgame121.glitch.me/api/games/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to delete  data'), response.status
        }

    }
}