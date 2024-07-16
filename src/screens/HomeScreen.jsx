import BannerComponent from '../components/HomeScreen/banner';
import CategoriesComponent from '../components/HomeScreen/Categories';
export default function HomeScreen() {
  return (
    <>
      <div className="bg-[#191919]">
        <BannerComponent />
        <CategoriesComponent />
      </div>
    </>
  );
}
