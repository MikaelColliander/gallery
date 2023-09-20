import "./card.css";

const Card:React.FC<{children: React.ReactNode}> = ({ children }) => {
    children

  return (
    <div className="card">
        {children}
    </div>
  );
};

export default Card;
