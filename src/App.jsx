import "./App.css";
import Card from "./components/Card.jsx";

const App = () => {
  return (
    <div className="App">
      <div className="header">Pet Adoption Centers</div>
      <div className="centers">
        <Card
          img="https://eastbayspca.org/wp-content/uploads/2023/09/Slater-768x817.jpg"
          name="East Bay SPCA"
          pets="Dog, Cat"
          website="https://eastbayspca.org/"
        />
        <Card
          img="https://www.alamedaanimalshelter.org/images/volunteer/fosterpic3a.jpg"
          name="FAAS"
          pets="Dog, Cat, Rabbit"
          website="https://www.alamedaanimalshelter.org/"
        />
        <Card 
          img="https://images.squarespace-cdn.com/content/v1/620c61ba37633c495eda0146/661d2cf2-a02a-403e-90d3-74006c8e4d29/IMG_1356.JPG?format=300w"
          name="BACS"
          pets="Dog, Cat, Rabbit"
          website="https://www.friendsofbacs.org/"
        />
        <Card 
          img="https://berkeleyhumane.org/wp-content/uploads/2023/09/IMG_3154-1024x683.jpg"
          name="Berkeley Humane"
          pets="Dog, Cat"
          website="https://berkeleyhumane.org/"
        />
        <Card 
          img="https://images.squarespace-cdn.com/content/v1/5984da00cd0f685f369c47f7/1269a1bc-0081-4d91-901b-c9457dee81d5/07062023+-++Kevin+3.jpg?format=1500w"
          name="Pets In Need"
          pets="Dog, Cat, Rabbit"
          website="https://www.petsinneed.org/"
        />
        <Card 
          img="https://www.sfspca.org/wp-content/uploads/2023/09/c0a9c924-36b2-4cdf-92e7-db538fbe4ac4.jpg"
          name="SF SPCA"
          pets="Dog, Cat"
          website="https://www.sfspca.org/"
        />
        <Card 
          img="https://cdn.rescuegroups.org/5970/pictures/animals/19514/19514596/95929250.jpg?width=210"
          name="Oakland Animal Services"
          pets="Dog, Cat, Rabbit, Pigeon, Rat"
          website="https://www.oaklandanimalservices.org/"
        />
        <Card 
          img="https://pet-uploads.adoptapet.com/9/6/4/743201393.jpg"
          name="ARF"
          pets="Dog, Cat"
          website="https://arflife.org/"
        />
        <Card 
          img="https://mhs.shelterbuddy.com/storage/image/0a4c2b2edb724dc69c985956e037430d-1694807931-1694807938-jpg/600-0-"
          name="Marin Humane"
          pets="Dog, Cat, Rabbit"
          website="https://marinhumane.org/"
        />
        <Card 
          img="https://g.petango.com/photos/2047/b04a7a5b-0fd4-4319-ae58-f2261cab8c0f.jpg"
          name="Valley Humane Society"
          pets="Dog, Cat"
          website="https://valleyhumane.org/"
        />
      </div>
    </div>
  );
};

export default App;
