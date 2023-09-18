import "./grid.css";

export interface GridProps {
    children: React.ReactNode;
    size?: string;
}

export const Grid:React.FC<GridProps> = ({
    children,
    size,
}) => {
    return <div className="grid-container" data-size={size}>{children}</div>
}

export default Grid;