
export default function Home() {
  return (
    <div className="flex justify-center w-screen">
      <main className="h-96 flex justify-center items-center p-2 w-full max-w-[730px]">
        <div className="flex justify-between items-center w-full">
          <h1 className="">Flashcard Quiz</h1>
          <button className="flex items-center border px-3 gap-2 h-9 bg-stone-900 text-stone-100 rounded-md">
            <img className="w-4" src="/add-white.svg" alt="add" />
            Manage Cards
          </button>
        </div>
      </main>
    </div>
  );
}
