import React from "react";
import styles from "./HomeDesign.module.css";

const HomeDesign = () => {
  return (
    <div className={styles.home_design_wrapper}>
      <div className={styles.home_design_content}>
        <h1>
          Design your <br />
          comfort zone
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
          sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
          aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
          alias?
        </p>
        <button className="button">Shop now</button>
      </div>
      <div className={styles.home_design_image}>
        <img
          className={styles.main_image}
          src="https://cdnm.westwing.com.br/glossary/uploads/br/2021/04/15021255/sala-de-estar-com-m%C3%B3veis-de-madeira.jpg"
          alt="Decoration"
        />
        <img src="https://static.superproatacado.com.br/storage/assets/o-que-faz-um-carpinteiro-saiba-tudo-sobre-a-profissao1a5b96f3241bdbe7385513ad69006f78.png" alt="Man working" className={styles.secondary_image} />
      </div>
    </div>
  );
};

export default HomeDesign;
