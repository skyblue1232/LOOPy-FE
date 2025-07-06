import CommonBottomBar from '../../../components/bottomBar/CommonBottomBar';

const SearchPage = () => {
  return (
    <div>
      search page
      <CommonBottomBar
        active="search"
        onChange={(tab) => {
          console.log(tab);
        }}
      />
    </div>
  );
};

export default SearchPage;
