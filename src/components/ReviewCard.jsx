import { FaStar } from "react-icons/fa";

const ReviewCard = ({ data }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("da-DK", { day: "2-digit", month: "2-digit", year: "numeric" }).format(date);
  };

  return (
    <article className="py-3 px-2 border-b-2 border-silver-chalice-100">
      <header className="flex justify-between">
        <h4 className="font-bold">{data.reviewerName}</h4>
        <div className="flex pt-1">
          <FaStar className="text-silver-chalice-300" />
          <FaStar className="" />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </header>
      <p>{data.comment}</p>
      <p className="text-sm text-end text-silver-chalice-600 py-2">{formatDate(data.date)}</p>
    </article>
  );
};

export default ReviewCard;
