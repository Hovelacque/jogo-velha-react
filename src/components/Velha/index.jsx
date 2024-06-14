import { useState } from "react";
import './index.css'

function Velha() {
    const [jogadas, setJogadas] = useState([
        '', '', '',
        '', '', '',
        '', '', ''
    ]);
    const [jogadorDaVez, setJogadorDaVez] = useState('X')
    const [gameover, setGameover] = useState(false);

    function clickDoJogador(index) {
        if (jogadas[index] == '' && gameover == false) {

            let novasJogadas = [...jogadas]
            novasJogadas[index] = jogadorDaVez;
            setJogadas(novasJogadas)

            if (jogadorDaVez == 'X')
                setJogadorDaVez('O')
            else
                setJogadorDaVez('X')
            // verificaGanhador();
        }
    }

    return (
        <>
            <h3>Jogo da velha</h3>
            <div id="game">
                {
                    jogadas.map((item, i) => (
                        <button
                            className="buttonGame"
                            onClick={() => { clickDoJogador(i) }}
                        >{item}</button>
                    ))
                }
            </div>
            <h2 id="status">Vez do jogador {jogadorDaVez}</h2>
        </>
    )
}
export default Velha;