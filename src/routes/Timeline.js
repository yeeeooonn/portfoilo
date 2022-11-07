import styles from './Timeline.module.css';

function Timeline() {
	return (
		<div id='timeline' className={styles.timeline}>
			<div className={styles.timeline__title}>TIMELINE</div>
			<div className={styles.timeline_content}></div>
		</div>
	);
}
export default Timeline;
