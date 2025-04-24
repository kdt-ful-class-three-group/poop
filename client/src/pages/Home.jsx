function Home({ children }) {
  return (
    <div className="flex flex-col items-center h-[calc(100vh-120px)] w-full px-[30px] pt-5 m-auto">
      {children}
    </div>
  );
}

export default Home;
