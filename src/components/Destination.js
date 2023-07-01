import destImg1 from "../Assets/1.jpg";
import destImg2 from "../Assets/2.jpg";
import destImg3 from "../Assets/3.jpg";
import destImg4 from "../Assets/4.jpg";
import destImg8 from "../Assets/8.jpg";
import "./Destination.css";
import DestinationData from "./DestinationData";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you a opportunity to see a lot, within a time frame.</p>
      <DestinationData
        className="first-des"
        header="Pokhara,Kaski"
        text="Pokhara, nestled in the picturesque country of Nepal, 
        is a renowned tourist destination that offers a stunning 
        blend of natural wonders. With its tranquil lakes, including 
        the famous Phewa Lake, and the breathtaking Annapurna mountain 
        range as a backdrop, Pokhara is a paradise for nature lovers and 
        adventure enthusiasts alike. Visitors can indulge in activities like 
        boating, paragliding, and hiking while immersing themselves in the 
        serenity of the surroundings. The city's vibrant culture, warm hospitality,
         and charming lakeside ambiance make Pokhara an unforgettable destination 
         for travelers seeking both relaxation and exhilaration."
        img1={destImg1}
        img2={destImg2}
      />

      <DestinationData
        className="first-des-reverse"
        header="Tea Garden, Ilam"
        text="Ilam tea garden, located in the eastern part of Nepal,
         is a picturesque tourist destination renowned for its lush green 
         tea plantations. Nestled amidst rolling hills and surrounded by 
         mist-covered mountains, the tea gardens of Ilam offer a tranquil
          retreat for nature lovers and tea enthusiasts alike. Visitors can 
          witness the tea cultivation process, from plucking the leaves to 
          processing them into aromatic tea. The serene atmosphere, 
          breathtaking views, and the opportunity to savor freshly brewed 
          tea make Ilam tea garden an ideal place to unwind and rejuvenate. 
          Exploring the tea gardens, enjoying the scenic beauty, and 
          experiencing the warm hospitality of the locals make a visit to 
          Ilam a memorable and refreshing experience."
        img1={destImg4}
        img2={destImg8}
      />
    </div>
  );
};
export default Destination;
