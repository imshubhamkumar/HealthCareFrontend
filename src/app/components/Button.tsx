interface Props{
    label: string
    onClick?: () => void
    bg?: string
    round?: boolean
    color?: string
}
export const ButtonComponent = (props: Props) => {
    const {label,onClick, bg="#8bc63f", round = true, color="#ffffff"} = props
    return (
        <button 
            onClick={onClick} 
            style={{color, background: bg, padding: '4px 18px', borderRadius: round ? '4px':0}}>
            {label}
        </button>
    )
}