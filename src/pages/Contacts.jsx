import React from "react";

const Contacts = () => {
  return (
    <div>
      <div>
        <p className="title-s">Контакты</p>
        <p className="description-s">
          Service options: On-site services · No online classes Address:
          ул.Геннадия Трошева, 7, 2 этаж, 6 кабинет, Grozny, Chechnya, 364024
          Hours: Open ⋅Closes 6PM Phone: 8 (938) 904-85-33 Appointments:
          intocode.ru
        </p>
        <p className="title-s">Наш офис</p>
        <div className="map">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa0b4a8254ab883b96d4a6922697e2c6e9a3998c01fd95746e338dfe7ff877d0b&amp;source=constructor"
            width="800"
            height="400"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
