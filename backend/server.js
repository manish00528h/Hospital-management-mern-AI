import app from "./app.js";
import cloudinary from "cloudinary";

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Root Health Route
app.get("/", (req, res) => {
  res.send("Hospital Management API is running...");
});

// Only start the listener during local development
if (process.env.NODE_ENV !== "production") {
  app.listen(process.env.PORT || 4000, () => {
    console.log(`Server listening on port ${process.env.PORT || 4000}`);
  });
}

// Export for ES Module format (do NOT add module.exports)
export default app;
