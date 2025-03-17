import useState from '../components/Card';

function GameBoard(){
    const card= [cartafinn, cartafinn, cartajake, cartajake, cartareigelado, cartareigelado, cartaprincesajujuba, cartaprincesajujuba, cartaursofesteiro, cartaursofesteiro, cartacondelimaograb];
   
    const GameBoard = () => {
        const InitialCard= [
            {id : 1, value: cartafinn, matched: false},
            {id : 2, value: cartafinn, matched: false},
            {id : 3, value: cartajake, matched: false},
            {id : 4, value: cartajake, matched: false},
            {id : 5, value: cartareigelado, matched: false},
            {id : 6, value: cartareigelado, matched: false},
            {id : 7, value: cartaprincesajujuba, matched: false},
            {id : 8, value: cartaprincesajujuba, matched: false},
            {id : 9, value: cartaursofesteiro, matched: false},
            {id : 10, value: cartaursofesteiro, matched: false},
            {id : 11, value: cartacondelimaograb, matched: false},
            {id : 12, value: cartacondelimaograb, matched: false},
        ]

        const [cards, setCards] = useState(shuffleArray([...initialCards]));
        const [flippedCards, setFlippedCards] = useState([]);


        const handleCardClick = (card) => {
        if (flippedCards.length < 2 && !card.matched && !flippedCards.includes(card)) {setFlippedCards([...flippedCards, card]);

           }
    
        };

        return (
            <div className="game-board">
              {card.map((card) => (
                <Card
                  key={card.id}
                  value={card.value}
                  isFlipped={flippedCards.includes(card) || card.matched}
                  onClick={() => handleCardClick(card)}
                />
              ))}
            </div>
          )
        
    }

    const Card = ({ value, isFlipped, onClick }) => {
        return (
          <div className="card" onClick={onClick}>
            {isFlipped ? (
              <img src={value} alt="card image" />
            ) : (
              <div className="card-back">?</div>
            )}
          </div>
        );
    };
    
        return(
            <>
            <>
            </>

            <styles/>
            <div className= "App">
                <header className= "App-header">
                <h1>card</h1>

                <ul>
                    {card.map((carta, index) => (
                        <li key= {index}></li>
                    ))
                        }

                    <div style= {{textAlign: 'center', margintop: '20vh'}}>
                        <button onClick= {() => setCarta(carta[Math.floor(Math.random()*carta.length)])}>Gerar Carta</button>

                if()
                            </div>
                    </ul>
                </header>
            </div>
            </>

        )    
}
export default GameBoard;