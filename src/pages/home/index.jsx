import StickyHeader from "./../../components/sticky-header/index";
import Tab from "./../../components/tab/index";
import ForYou from "./for-you";


const Home = () => {
  return (
    <>
      <Tab activeTab="for-you">
        <StickyHeader title="Anasayfa">
          <Tab.Items>
            <Tab.Item id="for-you">
              Sana Özel
              </Tab.Item>
              <Tab.Item id="followings">
                Takip edilenler
              </Tab.Item>
          </Tab.Items>
        </StickyHeader>
        <Tab.Content id="for-you">
          <ForYou />
          </Tab.Content>
        <Tab.Content id="followings">
          2. Content
          </Tab.Content>
      </Tab>
    </>
  );
};

export default Home;
