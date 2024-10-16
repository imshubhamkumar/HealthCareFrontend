interface Props {
    width?: number
    height?: number
}
export const Spacer = (props: Props) => {
    const {width=0, height=0} = props
    return <div style={{height, width}}/>
}