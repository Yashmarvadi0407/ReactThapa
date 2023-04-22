
import QuoteList from "./QuoteList";
const DUMMY_QUOTES=[
    {id:'q1',author:'Max',text:'Learning React is fun!'},
    {id:'q2',author:'Maximilian',text:'Learning React is greate'}
]


function AllQuotes(){
    return(
        <QuoteList quotes={ DUMMY_QUOTES}></QuoteList>
    )
}

export default AllQuotes;