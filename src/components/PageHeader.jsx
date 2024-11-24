const PageHeader = ({ pageTitle, children }) => {
  return (
    <header className="auto-rows-min pt-8 pb-4 grid gap-4">
      <h1 className="text-2xl font-semibold uppercase cursor-default">
        {pageTitle}
      </h1>
      {children}
    </header>
  );
};

export default PageHeader;
