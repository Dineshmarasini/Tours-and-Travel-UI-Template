import TripData from "./TripData";
import "./TripStyle.css";
import Trip1 from "../Assets/10.jpg";
import Trip2 from "../Assets/11.jpg";
import Trip3 from "../Assets/12.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trip</h1>
      <p>You can discover your own Trip and lets matchUp</p>
      <div className="tripcard">
        <TripData
          image={Trip3}
          heading="Chitwan National Park"
          text="Chitwan is a captivating 
        tourist destination renowned for its rich wildlife and 
        lush landscapes. Home to Chitwan National Park, visitors can
         embark on thrilling jungle safaris to spot endangered species
          such as Bengal tigers and one-horned rhinos. The combination of 
          diverse wildlife, picturesque scenery, and cultural experiences 
          make Chitwan a must-visit destination for nature enthusiasts and 
          adventure seekers."
        />

        <TripData
          image={Trip2}
          heading="Bhaktapur Durbar Square"
          text=" Bhaktapur Durbar Square, situated in Nepal, is a UNESCO World 
        Heritage Site renowned for its rich cultural heritage and architectural 
        splendor. The square is adorned with ancient temples, intricately carved 
        wooden structures, and palaces that reflect the grandeur of the Newar 
        civilization. Visitors can explore the historical treasures, marvel at
         the exquisite craftsmanship, and immerse themselves in the vibrant atmosphere 
         of Bhaktapur Durbar Square."
        />

        <TripData
          image={Trip1}
          heading="Hyatung Water fall"
          text="Hytung Waterfall, is a breathtaking 
        natural wonder nestled amidst lush greenery. With its cascading
         waters and serene surroundings, it offers a picturesque escape for 
         nature enthusiasts. The trek to Hytung Waterfall allows visitors to 
         immerse themselves in the beauty of the Nepalese countryside and
          experience the soothing ambiance of the cascading waters."
        />
      </div>
    </div>
  );
}
export default Trip;
