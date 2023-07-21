import 'styled-components'
import { Theme } from '@mui/material/styles'

declare module 'styled-components' {
    export interface DefaultThem extends Theme {}
}