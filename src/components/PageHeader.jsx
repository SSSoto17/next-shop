const PageHeader = ({ pageTitle, children }) => {
  return (
    <header className="auto-rows-min py-8">
      <h1 className="text-2xl font-semibold uppercase">{pageTitle}</h1>
      {children}
    </header>
  );
};

export default PageHeader;
