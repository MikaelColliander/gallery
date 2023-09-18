const Card:React.FC<{children: React.ReactNode}> = ({ children }) => {
    children

  return (
    <div className="c-card">
        {children}
    </div>
  );
};

export default Card;
