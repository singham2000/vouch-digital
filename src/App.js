import { Layout, Image } from 'antd';
import Form from './components/Form';
import Navbar from './components/Navbar';
import './styles/style.scss';
import Img from './styles/sd.png';
const { Content } = Layout;
function App() {
  return (
    <>
      <Layout>
        <Navbar />
        <Content>
          <div className="container">
            <Form />
            <Image
              className='image'
              src={Img}
              preview={false}
              placeholder="Loading..."
              alt="Developers"
            />
          </div>
        </Content>
      </Layout>
    </>
  );
}

export default App;
