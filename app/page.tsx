import Link from "next/link";
import "./top.scss";
import TextSpan from "../components/TextSpan";

export default function Home() {
  return (
    <main>
      <div className="page_wrap">
        <div className="page_top">
          <div className="top_inner">
            <h1 className="site_ttl txt_clr">
              Portfolio<br />Page
            </h1>
            <p className="page_content">
              作品一覧はこちら
              <span className="fn_s">※ID・PW入力あり</span>
              <span className="btn_enter">
                <Link href="/works">Enter</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
