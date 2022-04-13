const BarComponent = (props: BarItemProps<Data>) => {
  const { bar, borderRadius, onClick } = props;

  const barRef = useRef<SVGGElement>(null);
  const textRef = useRef<SVGTextElement>(null);

  const active = bar.color === bar.data.data.activeColor;

  const [tooltipWidth, setTooltipWidth] = useState(0);
  const tooltipHeight = 26;
  const gapBarToTooltip = 3;

  const sideSize = 14;
  const diagonal = Math.sqrt(sideSize ** 2 + sideSize ** 2);

  // Event
  function handleClick(e: React.MouseEvent<SVGRectElement>) {
    if (onClick) {
      onClick({ ...bar.data, color: bar.color }, e);
    }
  }

  useEffect(() => {
    const textRect = textRef.current?.getBoundingClientRect();
    if (textRect) {
      setTooltipWidth(textRect.width);
    }
  }, [bar.data]);

  return (
    <g ref={barRef} transform={`translate(${bar.x}, ${bar.y})`}>
      <rect
        width={bar.width}
        height={bar.height}
        rx={borderRadius}
        ry={borderRadius}
        fill={bar.color}
        strokeWidth="0"
        stroke={bar.color}
        onClick={handleClick}
      ></rect>

      {active && (
        <>
          <rect
            width={sideSize}
            height={sideSize}
            fill="#333"
            transform={`translate(${bar.width / 2}, -${
              diagonal + gapBarToTooltip
            }),rotate(45)`}
          />

          <rect
            fill="#333"
            width={tooltipWidth + 30}
            height={tooltipHeight}
            rx={4}
            ry={4}
            x={-(tooltipWidth / 2)}
            y={-(tooltipHeight + gapBarToTooltip + diagonal / 2)}
          />

          <text
            ref={textRef}
            fontSize={13}
            fill="#fff"
            textAnchor="middle"
            dominantBaseline="middle"
            x={bar.width / 2}
            y={-(tooltipHeight / 2 + gapBarToTooltip + diagonal / 2)}
          >{`${bar.data.value.toLocaleString()}원`}</text>
        </>
      )}

      {/* <ArrowRight /> */}
      {/* <BarItem {...props} /> */}
    </g>
  );
};
