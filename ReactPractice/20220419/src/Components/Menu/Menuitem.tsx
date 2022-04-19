import Meal from "./MenuDEF"
import styles from "./Menu.module.scss"

interface props {
    meal: Meal
}

export default function MenuItem(p: props) {
    return ( //"card meal"
        <div className={`${styles.card} ${styles.meal}`}>
            <div style={{ width: "100%", overflowY: "hidden" }}>
                <img src={p.meal.url} alt="Load Error" style={{ width: "100%", height: "auto" }} />
            </div>

            <span className={styles.mealName}>
                {p.meal.name}
            </span>

            <span className={styles.mealPrice}>
                {p.meal.price}
            </span>
        </div>
    )
}