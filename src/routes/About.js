import styles from './About.module.css';
import TITLE_BACK_IMAG from '../assets/title_background.png';

function About() {
	return (
		<div id='about' className={styles.about}>
			<div className={styles.about__title}>ABOUT</div>

			<div className={styles.about__content}>
				<div className={styles.about__image}></div>
				<div className={styles.about__intro}>
					<div className={styles.about__intro_title}> 즐겁게 일하는 개발자</div>
					<div className={styles.about__intro_content}>
						안녕하세요! 프론트엔드 개발자 이수연입니다.<br></br>
						<br></br>대학생활에 다양한 프로젝트와 인턴십과정에서 다양한
						프로젝트를 진행하였고, 이를 통해 웹 개발 업무 프로세스에 전반적인
						이해력을 습득하였습니다.
						<br></br>
						<br></br>
						개발하면서 제가 느낀 좋은 IT 서비스는 사용자의 입장에서 쓰기편한
						서비스라 생각하고, 늘 사용자의 관점을 고안하며 개발하고 있습니다.
						<br></br>
						<br></br>현재는 거창한 업무성과보다 사용자의 작은 문제해결에 끝까지
						몰입할 수 있는 신입 개발자입니다.
						<br></br>
						<br></br>이런 저의 성장가능성을 믿고 이끌어줄 회사를 찾고 있습니다.
					</div>
				</div>
			</div>
		</div>
	);
}
export default About;
