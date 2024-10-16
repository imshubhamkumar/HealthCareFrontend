interface Props {
    text: string | null
    color?: string
    bold?: boolean
    size?: number
}
export const CustomText = (props: Props) => {
    const {text, color="#333333", bold=false, size=1} = props
    return (
        <p style={{
            fontSize: `${size}em`,
            fontWeight: bold ? 'bold': 'normal',
            color
        }}>{text}</p>
    )
}