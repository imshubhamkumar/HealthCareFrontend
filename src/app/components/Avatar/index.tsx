import './index.css'
interface Props {
    firstName: string
    lastName: string
}
export const Avatar = (props: Props) => {
    const { firstName, lastName } = props
    const getInitials = (first: string, last: string) => {
        return (first.charAt(0) + last.charAt(0)).toUpperCase();
    };
    const initials = getInitials(firstName, lastName);
    return (
        <div className="avatar">
            {initials}
        </div>
    );
};
