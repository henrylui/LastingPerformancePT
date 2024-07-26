import React from 'react';
import styled from 'styled-components';

const TestimonialSection = styled.section`
  background-color: #2a8d8d;
  padding: 2rem;
  color: white;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const RatingContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const AverageRating = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
`;

const Stars = styled.div`
  color: #ffd700;
  font-size: 1.5rem;
`;

const ReviewCount = styled.span`
  color: #666;
  font-size: 0.9rem;
`;

const ReviewButton = styled.a`
  display: inline-block;
  background-color: #4285f4;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  margin-top: 0.5rem;
`;

const TestimonialCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
  color: #333;
  text-align: left;
`;

const ReviewerInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 0.5rem;
`;

const ReviewerName = styled.span`
  font-weight: bold;
`;

const ReviewDate = styled.span`
  color: #666;
  font-size: 0.8rem;
  margin-left: 0.5rem;
`;

const ReviewText = styled.p`
  margin-bottom: 0.5rem;
`;

const ReadMore = styled.a`
  color: #4285f4;
  text-decoration: none;
`;

const GoogleLogo = styled.img`
  height: 20px;
  margin-top: 0.5rem;
`;

const TestimonialComponent = () => {
  // This data would be manually updated
  const reviewData = {
    averageRating: 5.0,
    totalReviews: 9,
    reviews: [
      {
        name: "Kevin L",
        date: "1 month ago",
        rating: 5,
        text: "Dr. Linda Nguyen has really helped a lot during the time I've seen her. She's helped me recover from multiple issues by giving me exercises and stretches to help strengthen my body which has helped reduced issues such as lower back pain, tennis elbow, and others. Highly recommend her!",
        avatarUrl: "/path-to-avatar.jpg",
        reviewUrl: "https://g.co/kgs/tzrBYsa"
      }
      // Add more reviews here
    ]
  };

  const renderStars = (rating) => '★'.repeat(rating) + '☆'.repeat(5 - rating);

  return (
    <TestimonialSection>
      <SectionTitle>What our clients say about us</SectionTitle>
      <RatingContainer>
        <AverageRating>{reviewData.averageRating.toFixed(1)}</AverageRating>
        <Stars>{renderStars(reviewData.averageRating)}</Stars>
        <ReviewCount>({reviewData.totalReviews})</ReviewCount>
        <div>
          <ReviewButton href="https://g.page/r/YOUR_GOOGLE_REVIEW_URL" target="_blank" rel="noopener noreferrer">
            Review us on Google
          </ReviewButton>
        </div>
      </RatingContainer>
      {reviewData.reviews.map((review, index) => (
        <TestimonialCard key={index}>
          <ReviewerInfo>
            <Avatar src={review.avatarUrl} alt={`${review.name}'s avatar`} />
            <ReviewerName>{review.name}</ReviewerName>
            <ReviewDate>{review.date}</ReviewDate>
          </ReviewerInfo>
          <Stars>{renderStars(review.rating)}</Stars>
          <ReviewText>{review.text}</ReviewText>
          <ReadMore href={review.reviewUrl} target="_blank" rel="noopener noreferrer">Read more</ReadMore>
          <div>
            <GoogleLogo src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" />
          </div>
        </TestimonialCard>
      ))}
    </TestimonialSection>
  );
};

export default TestimonialComponent;