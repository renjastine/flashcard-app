import Header from "./components/Header";
import NumOfCards from "./components/NumOfCards";
import Controls from "./components/Controls";
import Flashcards from "./components/Flashcards";
import ManageCardsModal from "./components/ManageCardsModal";

export default function Home() {
  return (
    <div className="flex justify-center w-screen h-screen">
      <main className="flex flex-col justify-center items-center p-4 w-full max-w-[730px] gap-6">
        <Header />
        <NumOfCards />
        <Flashcards />
        <Controls />
        <ManageCardsModal />
      </main>
    </div>
  );
}
