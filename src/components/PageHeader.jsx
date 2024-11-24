const PageHeader = ({ pageTitle, children }) => {
  return (
    <header className="auto-rows-min pt-12 md:pt-16 pb-4 grid gap-4 flow-space">
      <h1 className="text-4xl font-semibold cursor-default">{pageTitle}</h1>
      {children}
    </header>
  );
};

export default PageHeader;
