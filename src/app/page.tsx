import MainContainer from "../components/Container/MainContainer";
import { QuoteModalProvider } from "../context/QuoteModalContext";

export default function Home() {
  return (
    <div className="bg-primary">
      <QuoteModalProvider>
        <MainContainer />
      </QuoteModalProvider>
    </div>
  );
}
