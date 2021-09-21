import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./careersItem.module.scss";
import CareersForm from "./CareersForm/CareersForm";
import { jobs } from "../jobs";
import { JobData } from "../../../shared/interfaces/jobData";

const CareersItem: React.FunctionComponent = () => {
  const router = useRouter();
  const { id } = router.query;
  const [job, setJob] = useState<JobData>({
    description: "",
    id: 0,
    plus: [],
    rank: "",
    reqSkills: [],
    responsibility: [],
    tech: "",
    time: "",
    title: ""
  });
  const {
    title,
    description,
    tech,
    time,
    rank,
    reqSkills,
    plus,
    responsibility
  } = job;

  useEffect(() => {
    if (id) {
      setJob(jobs[Number(id)]);
    }
  }, [id]);

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
        });
      });
    });
  }, []);

  useEffect(() => {
    const header = document.querySelector("header");
    if (router.pathname === "/careers/[id]") {
      header.classList.add("absoluteHeader");
    } else header.classList.remove("absoluteHeader");
  }, []);

  const handleShareClick = (): void => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      const tooltip = document.getElementById("tooltip");
      tooltip.style.visibility = "visible";
      setTimeout(() => (tooltip.style.visibility = "hidden"), 500);
    });
  };

  return (
    <section className={styles.careersItemWrapper}>
      <div className={styles.careersItemContent}>
        <a href="/careers" className={styles.careersItemBackLink}>
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transform="rotate(180)"
          >
            <path
              d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9L1 7ZM16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM1 9H16V7L1 7L1 9Z"
              fill="#EFE314"
            />
          </svg>
          <span className={styles.careersItemBackText}>Back</span>
        </a>
        <div className={styles.jobHeader}>
          <div className={styles.titleContainer}>
            <div className={styles.jobItemTitle}>{title}</div>
            <div className={styles.jobItemDescription}>
              {`${tech} ▪ ${time} ▪ ${rank}`}
            </div>
          </div>
          <div className={styles.jobHeaderLinkGroup}>
            <a href="#jobForm" className={styles.applyBtnLink}>
              <span className={styles.applyLink}>APPLY</span>
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9L1 7ZM16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM1 9H16V7L1 7L1 9Z"
                  fill="#171718"
                />
              </svg>
            </a>
            <a className={styles.shareLink} onClick={handleShareClick}>
              <svg
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.9998 5.99991C15.6567 5.99991 16.9998 4.65676 16.9998 2.99989C16.9998 1.34303 15.6567 -0.00012207 13.9998 -0.00012207C12.343 -0.00012207 10.9998 1.34303 10.9998 2.99989C10.9998 3.13698 11.009 3.27192 11.0268 3.40413L5.0564 6.81579C4.51936 6.30992 3.79577 5.99991 2.99977 5.99991C1.34291 5.99991 -0.000244141 7.34306 -0.000244141 8.99993C-0.000244141 10.6568 1.34291 11.9999 2.99977 11.9999C3.77029 11.9999 4.47296 11.7095 5.00426 11.232L11.0502 15.5506C11.3088 16.9445 12.5311 18 13.9998 18C15.6567 18 16.9998 16.6568 16.9998 15C16.9998 13.3431 15.6567 11.9999 13.9998 11.9999C12.9351 11.9999 11.9999 12.5546 11.4675 13.3908L5.96469 9.46024C5.9878 9.31018 5.99979 9.15645 5.99979 8.99993C5.99979 8.86283 5.99059 8.72788 5.97278 8.59566L11.9432 5.184C12.4802 5.68989 13.2038 5.99991 13.9998 5.99991ZM12.9999 15.0084C12.9999 15.0031 12.9999 14.9977 12.9999 14.9923C13.004 14.4435 13.4501 14 13.9998 14C14.5521 14 14.9998 14.4477 14.9998 15C14.9998 15.5522 14.5521 16 13.9998 16C13.4504 16 13.0044 15.5568 12.9999 15.0084ZM13.9998 3.9999C14.5521 3.9999 14.9998 3.55218 14.9998 2.99989C14.9998 2.44761 14.5521 1.99989 13.9998 1.99989C13.4475 1.99989 12.9998 2.44761 12.9998 2.99989C12.9998 3.55218 13.4475 3.9999 13.9998 3.9999ZM3.99978 8.99993C3.99978 9.55221 3.55206 9.99993 2.99977 9.99993C2.44748 9.99993 1.99977 9.55221 1.99977 8.99993C1.99977 8.44764 2.44748 7.99992 2.99977 7.99992C3.55206 7.99992 3.99978 8.44764 3.99978 8.99993Z"
                  fill="white"
                />
              </svg>
              <span id={styles.tooltip}>Copied to clipboard</span>
            </a>
          </div>
          <div className={styles.description}>
            <p>{description}</p>
          </div>
        </div>
        <div className={styles.line} />
        <div className={styles.bodyContent}>
          <div className={styles.reqSkills}>
            <div className={styles.bodyTitle}>Required skills</div>
            <ul>
              {reqSkills.map(requirement => (
                <li key={requirement}>{requirement}</li>
              ))}
            </ul>
          </div>
          {plus.length !== 0 && (
            <div className={styles.reqPlus}>
              <div className={styles.bodyTitle}>Would be a plus:</div>
              <ul>
                {plus.map(pl => (
                  <li key={pl}>{pl}</li>
                ))}
              </ul>
            </div>
          )}
          <div className={styles.bodyOffer}>
            <div className={styles.bodyTitle}>We offer</div>
            <ul>
              <li>
                Broad space for professional and personal development, learning
                new things;
              </li>
              <li>Professional and personal development;</li>
              <li>Friendly team;</li>
              <li>Comfortable working environment;</li>
              <li>
                Career path design, helping to reach out next promotion steps;
              </li>
              <li>
                Compensation for attending technical conferences and courses,
                and enhance your learnings;
              </li>
              <li>Cool Friday night board games;</li>
              <li>Other goodies and care about every employee.</li>
            </ul>
          </div>
          <div className={styles.bodyResponsibility}>
            <div className={styles.bodyTitle}>Responsibility:</div>
            <ul>
              {responsibility.map(r => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
          <div className={styles.bodyAbout}>
            <div className={styles.bodyTitle}>About BandaPixels</div>
            <p>
              BandaPixels software development and UI/UX design services. We
              offer all necessary services for business improvement. We work on
              design and development to make business more convenient and more
              pleasant for your customers
            </p>
          </div>
        </div>
        <div className={styles.line} />
        <CareersForm title={title} rank={rank} />
      </div>
    </section>
  );
};

export default CareersItem;
