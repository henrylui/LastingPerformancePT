import React from 'react';
import styled from 'styled-components';
import { formatDistanceToNow } from 'date-fns';

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

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 0.5rem;
  background-color: #4285f4;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
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
    totalReviews: 10,
    reviews: [
      {
        name: "Kevin L",
        date: new Date('2024-07-19'),
        rating: 5,
        text: "Dr. Linda Nguyen has really helped a lot during the time I've seen her. She's helped me recover from multiple issues by giving me exercises and stretches to help strengthen my body...",
        reviewUrl: "https://g.co/kgs/tzrBYsa"
      },
      {
        name: "Nicole H",
        date: new Date('2024-07-12'),
        rating: 5,
        text: "Dr. Linda Nguyen has helped improve my mobility and get rid of my back pain all together. 6 months ago I couldn’t run anymore due to back pain but since I‘ve seen Dr. Nguyen, I am now able to run and hike again. She really has changed my life...",
        reviewUrl: "https://g.co/kgs/BxcnzHG"
      },
      {
        name: "D V",
        date: new Date('2024-07-28'),
        rating: 5,
        text: "I’ve been a patient of Linda’s for the past year, and I can’t express enough gratitude for the incredible treatment I’ve received. As a former NFL player, I’ve faced significant back and neck injuries, and finding the right care has been challenging. Linda has been exceptional...",
        reviewUrl: "https://g.co/kgs/Mxdq7g6"
      }
      // Add more reviews here
    ]
  };

  const renderStars = (rating) => '★'.repeat(rating) + '☆'.repeat(5 - rating);

  const getInitialAvatar = (name) => {
    return name.charAt(0).toUpperCase();
  };

  return (
    <TestimonialSection>
      <SectionTitle>What our clients say about us</SectionTitle>
      <RatingContainer>
        <AverageRating>{reviewData.averageRating.toFixed(1)}</AverageRating>
        <Stars>{renderStars(reviewData.averageRating)}</Stars>
        <ReviewCount>({reviewData.totalReviews})</ReviewCount>
        <div>
          <ReviewButton href="https://www.google.com/search?client=safari&sca_esv=0dba993661c510c2&sca_upv=1&hl=en-us&sxsrf=ADLYWILbqaAqUv8H87ik2YyfFvZr2cewhA:1722034907948&q=lasting+performance+and+physical+therapy+centennial+reviews&uds=ADvngMj-y7vBN4WjOEmoytCOco0lQqOFUH2X4DFfaXB9TPPrwGI9FCJ7Ys_FTAXIqMEaesiTsTDYZWdyBQwXU9SJYQNT055fgRgkzejhB6WpQB2t5n93IAZW92x3UYqx6AiWJsoYhdQEKtgruArXW2z2uFfCL_qT79-jszpdmiYvBHSrv_-UdSX277NqHdLOTPW4a0QDzecPNjerECkigUNZp8aOi-LiJHsGR_HG_YIjIaEMrAN5IIIKHrK15yD8Am8Qh3yPsAN1iww14rGzrk3hsSis-7G4F85FhaTq1yTSH8yup4OD2uE3gMaSliqmGdAjgDLru4GwxbGTModgFFi2J16JW3XpCpApUlnJhTUTQHHLBm4QjrO4O-VNjWH2NiL6nSgyHHW8jsFhB-8Gd4oJisM4ej5lriShv8GBvqm5mRwyWNqOB4iEKo9ZWwQ-_ml9TrWLIV0ZOtGx28yU4zbyvYtBZSBjzF7TVctyPxnum_ST08pPfeg&si=ACC90nwjPmqJHrCEt6ewASzksVFQDX8zco_7MgBaIawvaF4-7ld1ub0UfdwhslqD6cnhMed9_xyx4h_ZDGAFHIFyIGuNG4AzvoiXV_AX-LAszPCmyEJnDunB1aPrH2KokxikA3lNf1Kg8BintcI4ZQV0WEv8u0boklP4bfhwECEIk8GDIVt3S6yodwvPZYSoOojo1bs7RxlG&sa=X&ictx=1&lei=2yqkZv_KOZOi0PEP2-2-sAM" target="_blank" rel="noopener noreferrer">
            Review us on Google
          </ReviewButton>
        </div>
      </RatingContainer>
      {reviewData.reviews.map((review, index) => (
        <TestimonialCard key={index}>
          <ReviewerInfo>
            <Avatar>{getInitialAvatar(review.name)}</Avatar>
            <ReviewerName>{review.name}</ReviewerName>
            <ReviewDate>{formatDistanceToNow(review.date, { addSuffix: true })}</ReviewDate>
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