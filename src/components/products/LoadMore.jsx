const LoadMore = ({ total, limit, setLoadLimit }) => {
  return (
    <section className="grid md:grid-cols-3 place-content-center place-items-center gap-y-2">
      {total > limit && (
        <button
          className="md:col-start-2 bg-silver-chalice-200 border w-fit py-2 px-10 text-md rounded-lg hover:bg-silver-chalice-100 hover:border-silver-chalice-200"
          onClick={() => {
            setLoadLimit(limit + 20);
          }}
        >
          Load more
        </button>
      )}

      <p className="text-sm self-start md:text-base md:col-start-3 md:justify-self-end">
        Viewing {limit} products
      </p>
    </section>
  );
};

export default LoadMore;
