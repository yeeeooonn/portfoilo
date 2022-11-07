import styles from './Timeline.module.css';

function Timeline() {
	return (
		<div id='timeline' className={styles.timeline}>
			<div className={styles.timeline__title}>TIMELINE</div>
			<ul className={styles.timeline__content}>
				<li>
					<h3>2018.03</h3>
					<h4>삼육대학교 입학</h4>
					<p>컴퓨터메카트로닉스 공학부 - 소프트웨어 전공</p>
				</li>

				<li>
					<h3>2020.11</h3>
					<h4>프로젝트 경진대회 동상 수상</h4>
					<p>
						삼육대학교 주최 교내 프로젝트 경진대회 동상<br></br>Make Us
						_3D프린터 중개 어플리케이션
					</p>
				</li>

				<li>
					<h3>2021.09 ~ 2021.12</h3>
					<h4>주식회사 샤샵</h4>
					<p>IT 스타트업 서비스개발팀 인턴</p>
				</li>

				<li>
					<h3>2022.08</h3>
					<h4>삼육대학교 졸업</h4>
				</li>
			</ul>
		</div>
	);
}
export default Timeline;
