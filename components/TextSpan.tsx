type TextSpanProps = {
  text: string;
  className?: string;
};

export default function TextSpan({ text, className }: TextSpanProps) {
  // クラス名に txt_clr が含まれるかチェック
  const shouldSplit = className?.includes("txt_clr");

  return (
    <h1 className={className}>
      {shouldSplit
        ? text.split("").map((char, i) =>
            char.trim() === "" ? " " : (
              <span key={i} className="site_txt">
                {char}
              </span>
            )
          )
        : text}
    </h1>
  );
}
