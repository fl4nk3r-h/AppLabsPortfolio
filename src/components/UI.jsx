import React, { useState, useRef } from "react";
import { ArrowIcon } from "./Icons";

export function Tag({ children, d }) {
  return (
    <span style={{
      display: "inline-block", padding: "3px 9px", borderRadius: "4px",
      border: `1px solid ${d.border}`, fontSize: "11px", fontWeight: 500,
      color: d.textMuted,
    }}>{children}</span>
  );
}

export function Divider({ d }) {
  return <div style={{ height: "1px", background: d.border }} />;
}

export function SectionTitle({ label, title, d }) {
  return (
    <div style={{ marginBottom: "48px" }}>
      <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: d.accent, marginBottom: "10px" }}>{label}</div>
      {title && <h2 style={{ fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.1rem)", color: d.text, lineHeight: 1.15, letterSpacing: "-0.02em" }}>{title}</h2>}
    </div>
  );
}

export function ProjectCard({ item, d }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "230px", flexShrink: 0, borderRadius: "8px", overflow: "hidden",
        transform: hovered ? "scale(1.07)" : "scale(1)",
        border: `1px solid ${hovered ? d.accent : d.border}`,
        background: d.card, cursor: "pointer",
        transition: "border-color 0.15s, box-shadow 0.15s, transform 0.2s ease",
        boxShadow: hovered ? `0 4px 20px rgba(255,255,255,0.08)` : "none",
      }}
    >
      <img src={item.img} alt={item.name} style={{ width: "100%", height: "138px", objectFit: "cover", display: "block" }} />
      <div style={{ padding: "16px" }}>
        <div style={{ fontWeight: 600, fontSize: "14px", marginBottom: "10px", color: d.text }}>{item.name}</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
          {item.tags?.map(t => <Tag key={t} d={d}>{t}</Tag>)}
          {item.date && <span style={{ fontSize: "11px", color: d.textFaint, alignSelf: "center" }}>{item.date}</span>}
        </div>
      </div>
    </div>
  );
}

export function ScrollRow({ items, d, enableFetch = false, onNavigate }) {
  const rowRef = useRef(null);

  const handleWheel = (e) => {
    if (!rowRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
    const atLeft  = scrollLeft === 0 && e.deltaY < 0;
    const atRight = scrollLeft + clientWidth >= scrollWidth - 1 && e.deltaY > 0;
    if (atLeft || atRight) return;
    e.preventDefault();
    rowRef.current.scrollLeft += e.deltaY;
  };

  return (
    <div>
      <div
        ref={rowRef}
        onWheel={handleWheel}
        style={{ display: "flex", gap: "14px", overflowX: "auto", padding: "12px", margin: "-12px", scrollbarWidth: "none" }}
      >
        {items.map((item, i) => {
          const canNavigate = enableFetch && item.repo;
          return (
            <a
              key={i}
              href={canNavigate ? `#project/${encodeURIComponent(item.repo)}` : item.link}
              target={canNavigate ? undefined : "_blank"}
              rel={canNavigate ? undefined : "noopener noreferrer"}
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={canNavigate ? (e) => { e.preventDefault(); onNavigate(item); } : undefined}
            >
              <ProjectCard item={item} d={d} />
            </a>
          );
        })}
      </div>
    </div>
  );
}
