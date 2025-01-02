import React from "react";

const GoogleMapsEmbed = () => {
  return (
    <div
      className="w-full md:w-[600px] h-[350px] mx-10"
      data-aos="fade-left"
      data-aos-duration="1500"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4276.480331794604!2d106.76517341087855!3d-6.185526393776158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f702e20e6c47%3A0x464cc2549df5c77f!2sPT%20SABA%20INDOMEDIKA!5e1!3m2!1sid!2sid!4v1735835526684!5m2!1sid!2sid"
        width="100%"
        height="100%"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
      ></iframe>
    </div>
  );
};

export default GoogleMapsEmbed;
