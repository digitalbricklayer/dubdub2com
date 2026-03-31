"use client";

import { start } from "node:repl";
import { useEffect, useRef } from "react";
import { DataSet } from "vis-data";
import { Timeline } from "vis-timeline/standalone";
import "vis-timeline/styles/vis-timeline-graph2d.min.css";

export default function Home() {
  const timelineRef = useRef<HTMLDivElement | null>(null);

  const timelineEvents = [
    {
      title: "1939",
      start: new Date(1939, 9, 1),
      end: new Date(1939, 9, 1),
      group: "poland",
      cardTitle: "Poland Campaign Begins",
      cardSubtitle: "Poland is invaded, marking the start of World War II.",
      cardDetailedText: "The invasion of Poland by Germany on September 1, 1939, marked the beginning of World War II. This event led to a global conflict that lasted until 1945, involving many nations and resulting in significant geopolitical changes."
    },
    {
      title: "1939",
      start: new Date(1939, 9, 27),
      end: new Date(1939, 9, 27),
      group: "poland",
      cardTitle: "Poland Campaign Ends",
      cardSubtitle: "Poland falls to German forces.",
      cardDetailedText: "The Polish Campaign ended with the fall of Warsaw, leading to the broader conflict of World War II."
    }
  ];

  useEffect(() => {
    if (!timelineRef.current) return;

    const groups = new DataSet([
      { id: "poland", content: "Poland Campaign" },
      { id: "eastern", content: "Operation Barbarossa" },
    ]);

    const items = new DataSet(
      timelineEvents.map((event, index) => ({
        id: index + 1,
        group: event.group,
        start: event.start,
        end: event.end,
        content: `<div style="text-align:center;"><strong>${event.title}</strong><br/>${event.cardTitle}</div>`,
        title: `${event.cardTitle}: ${event.cardDetailedText}`,
      }))
    );

    const options = {
      orientation: "bottom",
      stack: false,
      showCurrentTime: true,
      zoomable: true,
      horizontalScroll: true,
      min: new Date(1939, 1, 1),
      max: new Date(1945, 12, 31),
      moveable: true,
      tooltip: {
        followMouse: true,
      },
      groupOrder: "content",
    };

    const timeline = new Timeline(timelineRef.current, items, groups, options);

    return () => {
      timeline.destroy();
    };
  }, [timelineEvents]);

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        fontFamily: "sans-serif",
        backgroundColor: "#f9f9f9",
        color: "#333",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "3rem", margin: 0 }}>dubdub2.com</h1>
      <p style={{ fontSize: "1.25rem", marginTop: "1rem", color: "#666" }}>
        Coming soon
      </p>

      <div style={{ marginTop: "3rem", width: "100%", maxWidth: "1200px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Our Journey</h2>
        <div
          ref={timelineRef}
          style={{ width: "100%", height: "300px", border: "1px solid #ddd", borderRadius: "8px", background: "#fff" }}
        />
      </div>
    </main>
  );
}
