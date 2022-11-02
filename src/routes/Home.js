import styles from './Home.module.css';

function Home() {
	return (
		<div id='home' className={styles.home}>
			<div className={styles.home__halfcircle1}>
				<div className={styles.home__halfcircle2}>
					<div className={styles.home__name}>Lee Sooyeon</div>
				</div>
			</div>

			<div className={styles.home__rectangle}>
				<div className={styles.home__title}>
					Web-Developer<br></br> PORTFOILO
				</div>
			</div>
		</div>
	);
}
export default Home;
