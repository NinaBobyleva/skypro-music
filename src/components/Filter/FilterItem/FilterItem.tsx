"use client";
import classNames from "classnames";
import styles from "./filterItem.module.css";
import { useState } from "react";

type FilterItemProps = {
  title: string;
  isActive: boolean;
  handleFilterOpen: (newFilter: string) => void;
  list: string[];
};

export function FilterItem({
  title,
  isActive,
  handleFilterOpen,
  list,
}: FilterItemProps) {
  const [counter, setCounter] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // const handleFilter = () => {
  //   // const filterTracks = 
  // }

  return (
    <div className={styles.filterWrapper}>
      <div
        onClick={() => {
          handleFilterOpen(title);
          console.log(list);
          setIsOpen(false);
          setCounter(0);
        }}
        className={classNames(
          isActive ? styles.filterButtonActive : styles.filterButton,
          styles.btnText
        )}
      >
        {title}
      </div>
      {isOpen && (
        <div className={styles.svgBlock}>
          <div className={styles.svg}>
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="13" cy="12.75" rx="13" ry="12.75" fill="#AD61FF" />
            </svg>
          </div>
          <p className={styles.counter}>{counter}</p>
        </div>
      )}
      {isActive && (
        <div className={styles.filterContainer}>
          <ul className={styles.filterBox}>
            {list.map((item, index) => (
              <li key={index} className={styles.filterList}>
                <p
                  onClick={() => {
                    let names: string[] = [];
                    const result = list.forEach(el => !names.includes(el) ? names.push(el) : 0);
                    console.log(names);
                    // setCounter((prev) => (prev ? counter - 1 : counter + 1));
                    if (title === "исполнителю") {
                      setIsOpen(true);
                    }
                    // console.log(list.indexOf(item));
                  }}
                  className={styles.item}
                >
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
