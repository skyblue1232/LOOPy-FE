import CommonBottomBar from '../../../components/bottomBar/CommonBottomBar';
import MyStamp from './components/MyStamp';
import TopBar from './components/TopBar';

const HomePage = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -mx-[1.5rem] bg-gradient-to-b from-[#6970F3] to-[#3D418D] z-0" />

      <div className="relative z-10">
        <TopBar />
        <CommonBottomBar
          active="home"
          onChange={(tab) => {
            console.log(tab);
          }}
        />

        <div className="bg-white rounded-t-xl pt-10 -mx-[1.5rem]">
          <div className="px-[1.5rem] font-bold text-[1.25rem]">내 스탬프</div>
          <div className="px-[1.5rem] text-[0.875rem] text-gray-500 mt-2">
            1달 내 재방문이 없으면 포인트로 자동 환전되어요
          </div>
          <div className=" px-[1.5rem] mt-4 pb-[5rem]">
            {/*목데이터*/}
            <MyStamp
              imageUrl="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=400&q=80"
              cafeName="카페 위니"
              address="서울 서대문구 이화여대길 52"
              stampCount={5}
              stampMax={10}
              dueDate="8/15"
            />
            <MyStamp
              imageUrl="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=400&q=80"
              cafeName="카페 위니"
              address="서울 서대문구 이화여대길 52"
              stampCount={8}
              stampMax={10}
              dueDate="8/15"
            />
            <MyStamp
              imageUrl="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=400&q=80"
              cafeName="카페 위니"
              address="서울 서대문구 이화여대길 52"
              stampCount={1}
              stampMax={10}
              dueDate="8/15"
            />
            <MyStamp
              imageUrl="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=400&q=80"
              cafeName="카페 위니"
              address="서울 서대문구 이화여대길 52"
              stampCount={1}
              stampMax={10}
              dueDate="8/15"
            />
            <MyStamp
              imageUrl="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=400&q=80"
              cafeName="카페 위니"
              address="서울 서대문구 이화여대길 52"
              stampCount={1}
              stampMax={10}
              dueDate="8/15"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
