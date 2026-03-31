"use client";

import { useEffect, useRef } from "react";
import { DataSet } from "vis-data";
import { Timeline } from "vis-timeline/standalone";
import "vis-timeline/styles/vis-timeline-graph2d.min.css";

export default function Home() {
  const timelineRef = useRef<HTMLDivElement | null>(null);

  const timelineEvents = [
    {
      title: "2020",
      group: "western",
      cardTitle: "Company Founded",
      cardSubtitle: "Establishment",
      cardDetailedText: "dubdub2.com was established with a vision to innovate in the digital space."
    },
    {
      title: "2021",
      group: "eastern",
      cardTitle: "First Product Launch",
      cardSubtitle: "Product Release",
      cardDetailedText: "Launched our flagship product, revolutionizing how users interact with technology."
    },
    {
      title: "2022",
      group: "western",
      cardTitle: "Major Platform Update",
      cardSubtitle: "Version 2.0",
      cardDetailedText: "Released version 2.0 with enhanced features and improved user experience."
    },
    {
      title: "2023",
      group: "eastern",
      cardTitle: "Strategic Partnerships",
      cardSubtitle: "Business Growth",
      cardDetailedText: "Formed key partnerships to expand our reach and capabilities."
    },
    {
      title: "2024",
      group: "western",
      cardTitle: "Global Expansion",
      cardSubtitle: "International Growth",
      cardDetailedText: "Expanded operations internationally, serving customers worldwide."
    },
    {
      title: "2025",
      group: "eastern",
      cardTitle: "Future Innovations",
      cardSubtitle: "Upcoming Plans",
      cardDetailedText: "Planning groundbreaking features and services for the coming year."
    }
  ];

  useEffect(() => {
    if (!timelineRef.current) return;

    const groups = new DataSet([
      { id: "western", content: "Western Front" },
      { id: "eastern", content: "Eastern Front" },
    ]);

    const items = new DataSet(
      timelineEvents.map((event, index) => ({
        id: index + 1,
        group: event.group,
        start: `${event.title}-01-01`,
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
      min: new Date("2019-01-01"),
      max: new Date("2026-12-31"),
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
