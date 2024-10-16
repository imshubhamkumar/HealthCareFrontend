interface Props{
    label: string
    bg?: string
    isRound?: boolean

}
export const ButtonComponent = (props: Props) => {
    const {label, bg="#8bc63f"} = props
    return (
        <button style={{background: bg, paddingLeft: 12, paddingRight: 12, paddingTop: 4, paddingBottom: 4}}>{label}</button>
    )

}