import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';

function Footer() {
	return (
		<div className={styles.footer}>
			<div className={styles.footer__link}>
				<a href='https://github.com/yeeeooonn' target='_blank'>
					<FontAwesomeIcon icon={faGithub} />
				</a>
				<a href='https://blog.naver.com/sooyeon990828' target='_blank'>
					<FontAwesomeIcon icon={faHouseUser} />
				</a>
			</div>
			<p className={styles.footer__copy}>
				Copyright ⓒ 2021.Sooyeon Lee All rights reserved.
			</p>
		</div>
	);
}
export default Footer;
