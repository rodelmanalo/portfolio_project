import React, { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { images } from '../constants'
import styles from './Navbar.module.scss'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className={styles.app__navbar}>
      <div className={styles.app__navbarLogo}>
        <img src={images.logopic} alt="logo" />
        <div style={{ marginLeft: 10 }}>
          <p>
            Rodel<span>Manalo</span>
          </p>
        </div>
      </div>
      <ul className={styles.app__navbarLinks}>
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div>
              <a href={`#${item}`}>{item}</a>
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.app__navbarMenu}>
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
