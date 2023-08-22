const CardListPoint = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid gap-5 pb-8 pt-4 sm:mx-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {children}
    </div>
  );
};

export default CardListPoint;
