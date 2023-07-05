import { useState } from "react"
export function CardFollow ({children,userName ="unknown", name, InitialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(InitialIsFollowing)
    const imagen1= `https://unavatar.io/instagram/${userName}`
    const text = isFollowing ? 'Siguiendo':'Seguir'
    const buttonClassName = isFollowing ? 'tw-card-follow-button is-following' :'tw-card-follow-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    
return(
    <article className='tw-card-follow'>
           <header className='tw-card-follow-header'>
            <img 
            className='tw-card-avatar'
            alt="Avatar de insta"
            src={imagen1}/>
            <div className='tw-card-follow-info'>
                <strong>{children}</strong>
                <span className="tw-card-follow-infoUserName">@{userName}</span>
            </div>
           </header>
           <aside>
            <button className={buttonClassName} onClick={handleClick}>
            <span className="tw-card-stop-text">{text}</span>
                <span className="tw-card-stop-follow">Dejar de seguir</span>
            </button>
           </aside>
        </article>
)
}

