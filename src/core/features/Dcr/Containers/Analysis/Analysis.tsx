import React from "react";
import styles from "./analysis.module.scss";

const Analysis: React.FunctionComponent = () => {
  return (
    <section className={styles.dcrAnalysisWrapper}>
      <h3>Анализ и Решение</h3>
      <div className={styles.dcrAnalysisList}>
        <div className={styles.dcrAnalysisItem}>
          <div className={styles.dcrAnalysisItemImages}>
            <div className={styles.dcrAnalysisItemNumber}>
              <span>1</span>
            </div>
            <img src="/images/projects/dcr/analysis.png" alt="" />
          </div>
          <div className={styles.dcrAnalysisItemContent}>
            <h4>Детальный Анализ</h4>
            <p>
              Для комплексного решения проблематики компании мы подробно изучили
              платформу DCR Solutions, определив ее слабые стороны.
            </p>
          </div>
        </div>
        <div className={styles.dcrAnalysisItem}>
          <div className={styles.dcrAnalysisItemImages}>
            <div className={styles.dcrAnalysisItemNumber}>
              <span>2</span>
            </div>
            <img src="/images/projects/dcr/discuss.png" alt="" />
          </div>
          <div className={styles.dcrAnalysisItemContent}>
            <h4>Обсуждение с Клиентом</h4>
            <p>
              Наши специалисты проанализировали жалобы клиентов, обсудили
              пожелания заказчика, определили цели и задачи сервиса, а так же
              сделали аналитику тепловых карт, обсудили ключевые
              пользовательские сценарии и приоритизировали их.
            </p>
          </div>
        </div>
        <div className={styles.dcrAnalysisItem}>
          <div className={styles.dcrAnalysisItemImages}>
            <div className={styles.dcrAnalysisItemNumber}>
              <span>3</span>
            </div>
            <img src="/images/projects/dcr/road.png" alt="" />
          </div>
          <div className={styles.dcrAnalysisItemContent}>
            <h4>Определение Целей</h4>
            <p>
              В процессе анализа, мы заключили, что платформа DCR Solutions
              нуждалась в существенной модернизации и обновлении интерфейса,
              создании нового UI кита и новых более быстрых пользовательских
              сценариев, изменении размещения отдельных блоков и элементов для
              большего удобства пользователей.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analysis;
