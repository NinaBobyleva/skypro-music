"use client";
import styles from "./filter.module.css";
import { getUniqueValues } from "@/utils/getUniqueValues";
import { FilterItem } from "./FilterItem/FilterItem";
import { useState } from "react";
import { useAppSelector } from "@/store/store";

const SORT_OPTIONS = ["По умолчанию", "Сначала новые", "Сначала старые"];

export function Filter() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const tracks = useAppSelector((state) => state.tracks.currentPlaylist);

  const handleFilterOpen = (filterName: string) => {
    setActiveFilter((prev) => (prev === filterName ? null : filterName));
  };

  const getUniqueAuthors = getUniqueValues(tracks, "author");
  const getUniqueGenre = getUniqueValues(tracks, "genre");

  const filters = [
    {
      title: "исполнителю",
      list: getUniqueAuthors,
    },
    {
      title: "году выпуска",
      list: SORT_OPTIONS,
    },
    {
      title: "жанру",
      list: getUniqueGenre,
    },
  ];

  return (
    <div className={styles.centerblockFilter}>
      <div className={styles.filterTitle}>Искать по:</div>
      {filters.map((filter, index) => (
        <FilterItem
          key={index}
          title={filter.title}
          isActive={activeFilter === filter.title}
          handleFilterOpen={handleFilterOpen}
          list={filter.list}
        />
      ))}
    </div>
  );
}
