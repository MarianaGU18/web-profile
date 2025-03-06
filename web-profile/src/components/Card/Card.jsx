import styles from "./Card.module.scss";

const Card = ({imageSrc, title, description }) => {

    return (
        <div>
            <section className={styles.card}>
                <img src={imageSrc} alt={title} className={styles.image} />
                <h1>{title}</h1>
                <p>{description}</p>
            </section>
        </div>

    )
}

export default Card;