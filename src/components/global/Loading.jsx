import { ImSpinner2 } from "react-icons/im";
import { VscError } from "react-icons/vsc";

const Loading = ({ variant }) => {
  return (
    <section className="grid place-content-center">
      {variant === "loading" && (
        <article className="flex gap-2 items-center">
          <ImSpinner2 size="24" className="loaderIcon" />
          <h2 className="text-3xl font-semibold">Loading...</h2>
        </article>
      )}
      {variant === "error" && (
        <article className="flex gap-2 items-center">
          <VscError size="40" />
          <h2 className="text-2xl font-semibold">Failed to load</h2>
        </article>
      )}
    </section>
  );
};

export default Loading;
