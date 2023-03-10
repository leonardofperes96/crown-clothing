import React from "react";
import styles from "./Services.module.css";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";

interface Services {
  id: number;
  icon: React.ReactNode;
  text: string;
  title: string;
}

export const services_array: Services[] = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
];

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
