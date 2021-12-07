import PropTypes from "prop-types";
import "antd/dist/antd.css";
import Head from "next/head";

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <title>NodeBird</title>
        <meta charSet="utf-8" />
      </Head>
      <Component />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default App;

// Page들의 공통부분
// index.js 의 Home이 component로 들어와서 랜더링 된다.
