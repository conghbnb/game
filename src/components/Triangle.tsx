export const Triangle = ({
  w = 120,
  h = 120,
  direction = "right",
  color = "red",
}) => {
  const points: Record<string, string[]> = {
    top: [`${w / 2},0`, `0,${h}`, `${w},${h}`],
    right: [`0,0`, `0,${h}`, `${w},${h / 2}`],
    bottom: [`0,0`, `${w},0`, `${w / 2},${h}`],
    left: [`${w},0`, `${w},${h}`, `0,${h / 2}`],
  };

  return (
    <svg width={w} height={h}>
      <polygon points={points[direction].join(" ")} fill={color} />
      Sorry, your browser does not support inline SVG.
    </svg>
  );
};
