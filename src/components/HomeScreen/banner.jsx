import banner from '../../assets/banner.jpg';
import '../../index.css';
export default function BannerComponent() {
  return (
    <div
      className="h-[90vh] w-full flex justify-center items-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="w-10/12 bg-white bg-opacity-50 p-4 rounded-lg">
        <div className="flex justify-around items-center h-full">
          <div className="flex flex-col justify-center max-w-md">
            <h1 className="text-4xl font-bold mb-4">Título</h1>
            <p className="text-lg mb-4">
              Este es el texto de descripción que acompaña al título.
            </p>
          </div>
          <div className="flex justify-center items-center">texto prueba</div>
        </div>
      </div>
    </div>
  );
}
