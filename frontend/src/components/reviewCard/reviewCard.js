import React from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { format } from "date-fns";

const ReviewCard = ({ review }) => {
  // function ReviewCard(props) {
  //   const { review } = props;

  return (
    <li className="overflow-hidden rounded-md bg-white px-6 py-4 shadow">
      <div className="flex space-x-4 text-sm text-gray-500">
        <div className="flex-1 py-10">
          <h3 className="font-medium text-gray-900">
            {review.author.firstName}
          </h3>
          <p>
            <time dateTime={review.date}>
              {format(new Date(review.createdAt), "dd MMMM yyyy")}
            </time>
          </p>

          <div className="mt-4 flex items-center">
            {[0, 1, 2, 3, 4].map((rating) => (
              <StarIcon
                key={rating}
                className={clsx(
                  rating < review.overallRating
                    ? "text-yellow-400"
                    : "text-gray-300",
                  "h-5 w-5 shrink-0"
                )}
                aria-hidden="true"
              />
            ))}
          </div>
          <p className="sr-only">{review.overallRating} out of 5 stars</p>

          <div className="prose prose-sm mt-4 max-w-none text-gray-500">
            {review.comment}
          </div>
        </div>
      </div>
    </li>
  );
};

export default ReviewCard;
