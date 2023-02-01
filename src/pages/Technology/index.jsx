import { useState } from "react";
import data from "../../JSON/data.json";
import styles from "./Technology.module.scss";

export default function Technology() {
  const [technology] = useState(data.technology)
  const [value, setValue] = useState(0)

  const { name, images, description } = technology[value]

  return (
    <>
      <section className={styles.technology}>
        <article>
          <h1>
            03
            <span> Space Launch 101</span>
          </h1>
          <div className={styles.technology__desktop}>
            <article>
              <ul>
                {technology.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => setValue(index)}
                      className={`${index === value && "bg-white text-gray-900"
                        }`}>
                      {index + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </article>

            <article className={styles.technology__technologyText}>
              <h3>
                The terminology...
              </h3>

              <h2>
                {name}
              </h2>

              <p>{description}</p>
            </article>
          </div>
        </article>

        <article>
          <img src={images.portrait} alt={name} />
        </article>
      </section>
    </>
  )
}
