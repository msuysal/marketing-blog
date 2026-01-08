import styles from './GridIllustration.module.css';

interface GridIllustrationProps {
    type: 'nudges' | 'feedback' | 'ltv' | 'meaning';
}

const GridIllustration: React.FC<GridIllustrationProps> = ({ type }) => {
    return (
        <div className={styles.container}>
            {type === 'nudges' && (
                <div className={styles.nudges}>
                    <div className={styles.pathMain}></div>
                    <div className={styles.pathSplit}></div>
                    <div className={styles.highlightDot}></div>
                </div>
            )}
            {type === 'feedback' && (
                <div className={styles.feedback}>
                    <div className={styles.circle}></div>
                    <div className={styles.arrowTop}></div>
                    <div className={styles.arrowBottom}></div>
                    <div className={styles.centerNode}></div>
                </div>
            )}
            {type === 'ltv' && (
                <div className={styles.ltv}>
                    <div className={styles.axisX}></div>
                    <div className={styles.axisY}></div>
                    <div className={styles.bar1}></div>
                    <div className={styles.bar2}></div>
                    <div className={styles.bar3}></div>
                    <div className={styles.trendLine}></div>
                </div>
            )}
            {type === 'meaning' && (
                <div className={styles.meaning}>
                    <div className={styles.connection1}></div>
                    <div className={styles.connection2}></div>
                    <div className={styles.node1}></div>
                    <div className={styles.node2}></div>
                    <div className={styles.node3}></div>
                </div>
            )}
        </div>
    );
};

export default GridIllustration;
