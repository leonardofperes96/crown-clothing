import React from "react";
import styles from "./Services.module.css";
import { services_array } from "../utils/constants";
const Services = () => {
  return (
    <div className={styles.services_container}>
      <div className={styles.services_content}>
        <div className={styles.services_body}>
          <h3>
            Custom furniture <br />
            built only for you
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            ipsa eligendi voluptatum sequi corporis, blanditiis deserunt odio
          </p>
        </div>
        <div className={styles.services}>
          {services_array.map((service) => {
            return (
              <div key={service.id} className={styles.service_info}>
                <span>{service.icon}</span>
                <h4>{service.title}</h4>
                <p>{service.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
