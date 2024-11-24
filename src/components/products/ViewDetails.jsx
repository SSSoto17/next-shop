const ViewDetails = ({ total, limit, searchQuery }) => {
  return (
    <article className="flex justify-between items-end">
      <p>{total} products</p>
      {searchQuery && (
        <p>
          Search: <em>"{searchQuery}"</em>
        </p>
      )}
      <p>Viewing {limit} products</p>
    </article>
  );
};

export default ViewDetails;
