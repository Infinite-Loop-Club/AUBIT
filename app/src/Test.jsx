import React from "react";
import StaffCard from "./components/Card/Staff";
import ImageGallery from "./components/ImageGallery/ImageGallery";

export default () => <div style={{ display: "grid", height: '100vh', placeItems: 'center' }}>
  <StaffCard
    image='./images/administration/vc.png'
    name='Sandy'
    designation='Sandy pola varuma'
    resume='#test'
    mail='santhoshvelr@gmail.com' />
  <ImageGallery />
</div>;
