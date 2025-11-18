import Flashcards from "./components/Flashcards";
import ManageCardsModal from "./components/ManageCardsModal";

export default function Home() {
  return (
    <div className="flex justify-center w-screen h-screen">
      <main className="flex flex-col justify-center items-center p-4 w-full max-w-[730px] gap-6">
        < div className="flex justify-between items-center w-full" >
          < h1 className="" > Flashcard Quiz</h1 >
          < button className="flex items-center border px-3 gap-2 h-9 bg-stone-900 text-stone-100 rounded-md" >
            <img className="w-4" src="/add-white.svg" alt="add" />
            Manage Cards
          </button >
        </div >
        <h1 className="text-stone-400">Card 1 of 3</h1>
        <Flashcards />
        <div className='flex gap-5'>
          <button className='flex items-center px-5 gap-3 h-10 bg-white rounded-md shadow-sm'>
            <img src="/shuffle.svg" className='w-4' alt="shuffle" />
            Shuffle
          </button>
          <button className='flex items-center px-5 gap-3 h-10 bg-gray-950 rounded-md shadow-sm text-gray-50'>
            Next
            <img src="/next.svg" className='w-4' alt="shuffle" />
          </button>
        </div>
        <ManageCardsModal />
      </main>
    </div>
  );
}
