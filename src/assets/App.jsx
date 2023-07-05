import './App.css'
import { CardFollow } from './CardFollow'

export function App () {
    
    return (
    <section className='App'>
    <CardFollow  userName="Bladimir_Jr_" InitialIsFollowing={false} >
    Vladimir
    </CardFollow>
    <CardFollow  userName="Bladimir_Jr_" InitialIsFollowing={false} >
    Vladimir
    </CardFollow>
    </section>
    
    )
}