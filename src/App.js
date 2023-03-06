import "./App.css";
import Header from "./containers/Header/Header";
import GreenDelimiter from "./containers/GreenDelimiter/GreenDelimiter";
import BuyNow from "./containers/BuyNow/BuyNow";
import { mockup } from "./mockup";
import UsageDetails from "./containers/UsageDetails/UsageDetails";
import IngridianCards from "./containers/IngridianCards/IngridianCards";
import ProductInformation from "./containers/ProductInformation/ProductInformation";
import Dropdowns from "./containers/FAQ/FAQ";

function App() {
  const text = mockup.multiStyleText
  return (
    <div className="App">
      <Header title={text.headerText} subtitle={text.headerSubText}/>
      <BuyNow 
        title={text.buyNowTitle} 
        subTitle={text.buyNowSubTitle} 
        moneyGuarantee={mockup.staticText.moneyGuarantee}/>
      <GreenDelimiter text={text.delimiterOne}/>
      <UsageDetails buyNow={mockup.staticText.buyNow} moneyGuarantee={mockup.staticText.moneyGuarantee} />
      <IngridianCards header={mockup.ingridienceCards.header} cards={mockup.ingridienceCards.cards} />
      <GreenDelimiter text={text.delimiterTwo}/>
      <ProductInformation />
      <Dropdowns fag={mockup.guestions} />
      {/* <BuyNow moneyGuarantee={mockup.staticText.moneyGuarantee}/> */}
    </div>
  );
}

export default App;
