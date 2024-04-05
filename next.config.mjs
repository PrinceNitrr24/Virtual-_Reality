// next.config.js
import withVideos from "next-videos";

export default withVideos({
  images: {
    domains: [
      "assets.aceternity.com",
      "plus.unsplash.com",
      "aceternity.com",
      "images.unsplash.com",
    ],
  },
});
