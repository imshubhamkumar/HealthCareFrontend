import { ReactNode } from "react"

interface Props {
    text: string | null | ReactNode
    color?: string
    bold?: boolean
    size?: number
}
export const CustomText = (props: Props) => {
    const {text, color="#333333", bold=false, size=1} = props
    return (
        <div style={{
            fontSize: `${size}em`,
            fontWeight: bold ? 'bold': 'normal',
            color
        }}>{text}</div>
    )
}