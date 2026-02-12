interface Props {
    children?: string;
    onClick: () => void;
    color?: string;// optional

    // You can use union operators to allow only select types
    // color?: 'primary' | 'secondary' 
}

const Button = ({ children, onClick, color = 'primary' }: Props) => {
    return (
        <button className={'btn btn-' + color} onClick={onClick} >
            {children}
        </button >
    )
}

export default Button
