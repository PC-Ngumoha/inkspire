import { GiQuillInk } from 'react-icons/gi'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={ styles.footer }>
      <div className={ styles.container }>
        <div className={ styles.content }>
          <div>
            <span className={ styles.brand }>
              <GiQuillInk />Inkspire
            </span>
            <span>
              Lorem ipsum dolor sit amet. Sit nobis repellat sed nulla odit qui Quis repellat aut deleniti repellat qui voluptas voluptas cum blanditiis consectetur rem voluptas accusamus!
            </span>
          </div>
          <div>
            <span className={ styles.heading }>
              Contact Info
            </span>
            <span className={ styles.move }>No. 18 Adewale Road Lagos</span>
            <span className={ styles.move }>+238 7089699162</span>
            <span className={ styles.move }>chukwuemekangumoha@gmail.com</span>
          </div>
          <div>
            <span className={ styles.heading }>
              Social Info
            </span>
            <span>Where you can keep in touch with us</span>
            <div className={ styles.icons }>
              {/* SOCIAL ICONS */}
              {/* Twitter */}
              <a
                href='https://twitter.com/PNgumoha'
                target='_blank'
                rel='noopener'
              >
                <FaTwitter />
              </a>
              {/* Linkedin */}
              <a
                href='https://www.linkedin.com/in/prince-ngumoha-95a633194/'
                target='_blank'
                rel='noopener'
              >
                <FaLinkedin />
              </a>
              {/* Github */}
              <a
                href='https://github.com/PC-Ngumoha'
                target='_blank'
                rel='noopener'
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
        <hr className={ styles.divider }/>
        <span className={ styles.copyright }>
          &copy;Copyright 2024 Inkspire. created by <strong>PC-Ngumoha</strong>
        </span>
      </div>
    </footer>
  )
}

export default Footer;