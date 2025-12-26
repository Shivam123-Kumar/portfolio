// Project Images
import wheelchair from "../assets/projects/eyeball-wheelchair.jpg";
import food from "../assets/projects/food-delivery.jpg";
import fakeNews from "../assets/projects/fake-news.jpg";
import battery from "../assets/projects/battery-lstm.jpg";
import movie from "../assets/projects/movie-recommendation.jpg";

const projects = [
  {
    title: "Eyeball Controlled Wheelchair",
    image: wheelchair,
    tech: "OpenCV, Python, Computer Vision",
    description:
      "Developed an assistive wheelchair system controlled using eye movements. Implemented real-time eye tracking and gaze detection using OpenCV to help physically challenged users navigate independently.",
  },
  {
    title: "Fast Food Delivery Website",
    image: food,
    tech: "React, Node.js, Express, MongoDB",
    description:
      "Built a full-stack food delivery web application with user authentication, cart management, order placement, and admin controls using the MERN stack.",
  },
  {
    title: "AI Powered Fake News Detector",
    image: fakeNews,
    tech: "BERT, NLP, Python, Deep Learning",
    description:
      "Designed a fake news classification system using a pre-trained BERT model to accurately identify misleading and false news articles from real-world datasets.",
  },
  {
    title: "Battery SOH & Remaining Useful Life Prediction",
    image: battery,
    tech: "LSTM, Deep Learning, Python",
    description:
      "Implemented an LSTM-based deep learning model to predict battery State of Health (SOH) and Remaining Useful Life (RUL), enabling predictive maintenance.",
  },
  {
    title: "Movie Recommendation System",
    image: movie,
    tech: "Collaborative Filtering, Python, Machine Learning",
    description:
      "Built a recommendation system using collaborative filtering techniques to suggest personalized movies based on user preferences and interaction data.",
  },
];

export default projects;
