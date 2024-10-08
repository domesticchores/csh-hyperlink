import Image from "next/image";

export default function Home() {
  return (<div>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
    <h3>
      Heading
      <small className="text-muted">with muted text</small>
    </h3>
    <p className="lead">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
      </div>

  );
}
