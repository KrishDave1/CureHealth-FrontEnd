import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Review from "../pages/Review.jsx";
const reviews = [
  {
    description:
      "I cannot express enough gratitude for the exceptional care and compassion I received from this healthcare facility. From the moment I walked in, the staff made me feel welcomed and at ease. The doctors and nurses were not only highly skilled but also genuinely caring. They took the time to explain my condition and treatment options in a way that I could understand. ",
    imageurl:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

    name: "John Doe",
    rating: 5,
  },
  {
    description:
      "When I found myself in a health crisis, I turned to this healthcare provider, and they were a true lifesaver. The medical team was quick to respond, and the emergency care I received was efficient and effective. The nurses were compassionate and attentive, ensuring I felt as comfortable as possible given the circumstances.",
    imageurl: "person2.jpg",
    name: "James Smith",
    rating: 4,
  },
  {
    description:
      "I've been a patient at this health center for a while, and it's become my one-stop destination for comprehensive healthcare services. They offer everything from primary care and specialists to various wellness programs. The convenience of having all these services under one roof is a significant plus. ",
    name: "Jane austin",
    rating: 4,
    imageurl: "person3.webp",
  },
  {
    description:
      "I can't say enough good things about the pediatric care at this facility. From the moment you step in, it's clear that the environment is designed with children in mind. The waiting area is filled with colorful decorations and toys, which immediately put my little one at ease. The pediatricians are not only highly skilled but also excellent with kids. ",
    name: "Jack shroff",
    rating: 5,
    imageurl: "person4.jpg",
  },
  {
    description:
      "My family and I have had the privilege of using this healthcare provider for my elderly mother's care. The geriatric care team here has been a true partner in her overall well-being. They have shown patience, empathy, and expertise in managing her complex medical needs. ",
    name: "kyle kennedy",
    rating: 5,
    imageurl: "person5.jpg",
  },
  {
    description:
      "I recently had my first telehealth appointment with this healthcare provider, and I was thoroughly impressed. The process was seamless, from scheduling the appointment to the video consultation itself. The doctor was attentive and addressed all my concerns, even though we were miles apart.",
    name: "kate perry",
    rating: 5,
    imageurl: "person6.jpg",
  },
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Slider = () => {
  const review = reviews.map((item, i) => (
    <Review
      key={i}
      description={item.description}
      url={item.imageurl}
      name={item.name}
      rating={item.rating}
    />
  ));
  return (
    <div>
      <Carousel
        showDots={true}
        responsive={responsive}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {review}
      </Carousel>
    </div>
  );
};

export default Slider;
