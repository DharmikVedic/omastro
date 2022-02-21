import "../styles/globals.css";
import "../styles/style.css";
import Layout from "../components/layout/layout";
import Logincontext from "../components/context/logincontext";
import ProfileContect from "../components/context/profileContext";

function MyApp({ Component, pageProps }) {
  return (
    <ProfileContect>
      <Logincontext>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Logincontext>
    </ProfileContect>
  );
}

export default MyApp;
