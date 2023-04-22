import { Component} from 'react'

class CardList extends Component {
 
    render(){
        const {monstar}=this.props
        console.log("card component");
        return(
            <div>
                {
                    monstar.map((monstar,index)=>(
                        <div key={index} className="card">
                            <img src={`https://robohash.org/${monstar.id}/set=set2&size=180*180`} alt={`monstar${monstar.name}`} />
                            <h2>{monstar.name}</h2>
                            <p>{monstar.email}</p>


                        </div>
                    ))
                }
            </div>
        )
    }
}

export default CardList