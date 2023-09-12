import '../styles/globals.css'
import { ContextProvider } from '../src/components/context/Context';
import Layout from '../src/components/Layout';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import awsExports from '../src/aws-exports';

function MyApp({ Component, pageProps }) {
  Amplify.configure(awsExports);
//Amplify.configure({ ...awsExports, ssr: true }); //==> This doesn't change latency. issue
  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  )
}


export default MyApp