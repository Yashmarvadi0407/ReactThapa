import QuoteForm from "./QuoteForm";

function NewQuote(){
    
    const addQuoteHandler=quoteData =>{
        console.log(quoteData);
    }
    
    
    return(
        <QuoteForm onAddQuote={addQuoteHandler}></QuoteForm>
    )
}
export default NewQuote;