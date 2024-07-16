import CardComponent from './Card';

export default function CategoriesComponent() {
  return (
    <>
      <div className="m-20">
        <section>
          <div className="bg-[#6BD1FF] w-56 text-center p-5 rounded-xl">
            <h1>Frontend</h1>
          </div>
          <CardComponent />
        </section>

        <section>
          <h1>Backend</h1>
        </section>

        <section>
          <h1>Innovación y Gestión</h1>
        </section>
      </div>
    </>
  );
}
