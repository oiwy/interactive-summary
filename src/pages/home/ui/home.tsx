const Home = () => {
  return (
    <>
      <section className="relative items-center container h-screen flex justify-center">
        <div className="flex w-min items-start flex-col gap-y-1">
          <button className="text-7xl w-min font-semibold text-tomato">Hello</button>
          <button className="text-7xl w-min font-semibold text-brown">Привет</button>
        </div>
        <div className="absolute bottom-6 flex flex-col items-center gap-y-1">
          <span className="text-2xl text-gray">Select a language</span>
          <span className="text-2xl text-gray">Выберите язык</span>
        </div>
      </section>
    </>
  );
}

export default Home;