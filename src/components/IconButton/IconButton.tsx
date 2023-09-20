export interface IconButtonProps {
    url: string;
    ariaLabel: string;
    children: React.ReactNode;
}

export const IconButton:React.FC<IconButtonProps> = ({
    url,
    ariaLabel,
    children,
}) => {
    return <a
        href={url}
        aria-label={ariaLabel}
        tabIndex={0}
    >
        {children}
    </a>
}

export default IconButton;
