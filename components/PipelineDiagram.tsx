"use client";

import { motion } from "framer-motion";

export default function PipelineDiagram({
  nodes,
  compact = false,
}: {
  nodes: string[];
  compact?: boolean;
}) {
  // Space between nodes
  const gap = compact ? 45 : 65;

  // SVG dimensions
  const height = compact ? 56 : 72;
  const y = height / 2;

  // Calculate the width required by each node
  const nodeWidths = nodes.map((label) => label.length * 6.4 + 22);

  // Padding around the complete diagram
  const horizontalPadding = 20;

  // Calculate node center positions dynamically
  const positions: number[] = [];

  let currentX = horizontalPadding + nodeWidths[0] / 2;

  nodes.forEach((_, i) => {
    if (i === 0) {
      positions.push(currentX);
      return;
    }

    currentX += nodeWidths[i - 1] / 2 + gap + nodeWidths[i] / 2;
    positions.push(currentX);
  });

  // SVG width based on actual node sizes
  const width =
    positions.length > 0
      ? positions[positions.length - 1] +
        nodeWidths[nodeWidths.length - 1] / 2 +
        horizontalPadding
      : 100;

  return (
    <div className="w-full min-w-0 overflow-x-auto overflow-y-hidden">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width={width}
        height={height}
        className="block h-auto max-w-none"
        role="img"
        aria-label={`Pipeline: ${nodes.join(" leads to ")}`}
      >
        {/* Connecting lines + animated dots */}
        {nodes.slice(0, -1).map((_, i) => {
          const x1 = positions[i] + nodeWidths[i] / 2 + 6;
          const x2 = positions[i + 1] - nodeWidths[i + 1] / 2 - 6;

          return (
            <g key={i}>
              <line
                x1={x1}
                y1={y}
                x2={x2}
                y2={y}
                stroke="#242C34"
                strokeWidth={1.5}
                strokeDasharray="4 5"
              />

              <motion.circle
                r={2.6}
                fill="#3FA9A0"
                initial={{
                  cx: x1,
                  opacity: 0,
                }}
                animate={{
                  cx: [x1, x2],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  repeatDelay: 0.6,
                  delay: i * 0.35,
                  ease: "linear",
                }}
                cy={y}
              />
            </g>
          );
        })}

        {/* Nodes */}
        {nodes.map((label, i) => {
          const cx = positions[i];
          const textWidth = nodeWidths[i];

          return (
            <g
              key={`${label}-${i}`}
              transform={`translate(${cx}, ${y})`}
            >
              <rect
                x={-textWidth / 2}
                y={-14}
                width={textWidth}
                height={28}
                rx={5}
                fill="#12171C"
                stroke={
                  i === nodes.length - 1
                    ? "#E8A33D"
                    : "#242C34"
                }
                strokeWidth={1.2}
              />

              <text
                textAnchor="middle"
                dy="4"
                className="font-mono"
                fontSize="10.5"
                fill={
                  i === nodes.length - 1
                    ? "#E8A33D"
                    : "#C6D0D9"
                }
              >
                {label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}