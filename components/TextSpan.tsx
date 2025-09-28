type TextSpanProps = {
  text: string;
  as?: keyof JSX.IntrinsicElements;
  wrapClassName?: string;
};

export default function TextSpan(props: TextSpanProps) {
  // デバッグ用ログ
  console.log("TextSpan props:", props);

  const {
    text,
    as: Tag = "span",
    wrapClassName = "txt_accent",
  } = props;

  if (!text) return null;

  const chars = Array.from(text);
  // if (chars.length === 1) {
  //   return (
  //     <Tag className={wrapClassName}>{chars[0]}</Tag>
  //   );
  // }

  const first = chars[0];
  const last = chars[chars.length - 1];
  const middle = chars.slice(1, -1).join("");

  return (
    <>
      <Tag className={wrapClassName}>{first}</Tag>
      {middle}
      <Tag className={wrapClassName}>{last}</Tag>
    </>
  );
}
