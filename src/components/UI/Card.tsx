const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid items-start border-b border-gray-300 py-6   lg:grid-cols-2 lg:items-center xl:pr-32">
      {children}
    </div>
  );
};

export default Card;
