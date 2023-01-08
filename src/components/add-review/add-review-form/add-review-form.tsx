import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  APIRoute,
  MAX_COMMENT_LENGTH,
  MIN_COMMENT_LENGTH,
  RATING_STARS
} from '../../../consts';
import { useAppDispatch } from '../../../hooks';
import { addReviewAction } from '../../../store/actions/api-actions';
import { CommentPost } from '../../../types/comment.model';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

function AddReviewForm() {
  const [review, setReview] = useState<CommentPost>({
    rating: '0',
    comment: '',
  });
  const [reviewValidation, setReviewValidation] = useState(false);
  const dispatch = useAppDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (review.comment.length < MIN_COMMENT_LENGTH || review.rating === '0') {
      setReviewValidation(true);
      return;
    }
    dispatch(addReviewAction({
      ...review,
      movieId: params.id,
    }));
    navigate(`${APIRoute.Movies}/${params.id}`);
  };

  const handleComment = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setReview({ ...review, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (review.comment.length >= MIN_COMMENT_LENGTH && review.rating !== '0') {
      setReviewValidation(false);
    }
  }, [review]);

  return (
    <div className="add-review">
      <form onSubmit={handleSubmit} className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {RATING_STARS.map((rating) => (
              <React.Fragment key={rating}>
                <input
                  className="rating__input"
                  id={`star-${rating}`}
                  type="radio"
                  name="rating"
                  value={rating}
                  onChange={handleComment}
                />
                <label className="rating__label" htmlFor={`star-${rating}`}>
                  Rating {rating}
                </label>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="add-review__text">
          <Tippy
            content="At least 40 letters and movie rating are required"
            placement="bottom"
            visible={reviewValidation}
          >
            <textarea
              className="add-review__textarea"
              name="comment"
              id="review-text"
              placeholder="Review text"
              onChange={handleComment}
              value={review.comment}
              minLength={MIN_COMMENT_LENGTH}
              maxLength={MAX_COMMENT_LENGTH}
            >
            </textarea>
          </Tippy>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddReviewForm;
