import Catalog from "../../features/catalog/Catalog";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div className={styles["home"]}>
        <h1>Take a look of the best from Pictagram</h1>

        <h2>Our partners</h2>
        <section className={styles["ads"]}>
          <div
            className={styles["ads-item"]}
            style={{
              backgroundImage: `url(${`https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`})`,
            }}
          >
            <h3>Best interor LTD</h3>
          </div>
          <div
            className={styles["ads-item"]}
            style={{
              backgroundImage: `url(${`https://images.unsplash.com/photo-1583784561105-a674080f391e?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`})`,
            }}
          >
            <h3>Top Cosmetics LTD</h3>
          </div>
          <div
            className={styles["ads-item"]}
            style={{
              backgroundImage: `url(${`https://images.unsplash.com/photo-1471400974796-1c823d00a96f?q=80&w=1667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`})`,
            }}
          >
            <h3>Adventures LTD</h3>
          </div>
        </section>
        <h3 className={styles["categories-headline"]}>Categories</h3>
        <div className={styles["catalogs-container"]}>
          <Catalog
            key={1}
            catalogId={1}
            url={`https://images.unsplash.com/photo-1618805412754-0f19ffa95d16?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
          />
          <Catalog
            key={2}
            catalogId={2}
            url={`https://images.unsplash.com/photo-1645497265284-f2cf176bcb6c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
          />
          <Catalog
            key={3}
            catalogId={3}
            url={`https://images.unsplash.com/photo-1676883344237-a99061339b06?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
          />
          <Catalog
            key={4}
            catalogId={4}
            url={`https://images.unsplash.com/photo-1677658288051-ca5f6ddaa225?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
          />
          <Catalog
            key={5}
            catalogId={5}
            url={`https://images.unsplash.com/photo-1511867674775-1176e6174052?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
