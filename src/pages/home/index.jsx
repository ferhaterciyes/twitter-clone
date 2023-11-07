import StickyHeader from "./../../components/sticky-header/index";
import Tab from "./../../components/tab/index";

const Home = () => {
  return (
    <>
      <Tab activeTab="followings">
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
          1. Content
          </Tab.Content>
        <Tab.Content id="followings">
          2. Content
          </Tab.Content>
      </Tab>
    </>
  );
};

export default Home;
