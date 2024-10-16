import { ReactNode } from "react"

interface Props {
    header: string | ReactNode | null
    headerCenter?:boolean
    children?: ReactNode | string | null
}
export const Cards = (props: Props) => {
    const {header, headerCenter=false, children = "" } = props
    return (
        <div style={{
            background: "#ffffff",
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            padding: '20px'
        }}>
            <h2 style={{color: '#333333', textAlign: headerCenter ? 'center': 'left'}}>{header}</h2>
            <section style={{margin: "10px 0"}}>
                {children}
            </section>
        </div>
    )
}