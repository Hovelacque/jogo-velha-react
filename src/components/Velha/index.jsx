import { useEffect, useState } from "react";
import './index.css'

function Velha() {
    const [jogadas, setJogadas] = useState([
        '', '', '',
        '', '', '',
        '', '', ''
    ]);
    const [jogadorDaVez, setJogadorDaVez] = useState('X')
    const [gameover, setGameover] = useState(false);
    const [status, setStatus] = useState('Vez do jogador X');

    useEffect(() => {
        verificaGanhador();
    }, [jogadas])

    function verificaCelulas(c1, c2, c3) {
        const ganhou = (
            jogadas[c1] != '' &&
            jogadas[c2] != '' &&
            jogadas[c3] != '' &&
            jogadas[c1] == jogadas[c2] &&
            jogadas[c2] == jogadas[c3]
        );

        if (ganhou) {
            setStatus(`Jogador ${jogadas[c1]} Ganhou !!`)
        }

        return ganhou;
    }

    function verificaGanhador() {
        if (
            verificaCelulas(0, 1, 2) || //linha1
            verificaCelulas(3, 4, 5) || //linha2
            verificaCelulas(6, 7, 8) || //linha3

            verificaCelulas(0, 3, 6) || //coluna1
            verificaCelulas(1, 4, 7) || //coluna2
            verificaCelulas(2, 5, 8) || //coluna3

            verificaCelulas(0, 4, 8) || //diagonal1
            verificaCelulas(2, 4, 6)    //diagonal2
        ) {
            setGameover(true);
        }
        else {
            const totalDeJogadas = jogadas.filter(x => x != '').length;
            if (totalDeJogadas == 9) {
                setStatus(`Deu velha !!`)
                setGameover(true);
            }
        }
    }

    function clickDoJogador(index) {
        if (jogadas[index] == '' && gameover == false) {

            let novasJogadas = [...jogadas]
            novasJogadas[index] = jogadorDaVez;
            setJogadas(novasJogadas)

            if (jogadorDaVez == 'X') {
                setJogadorDaVez('O')
                setStatus('Vez do jogador O')
            }
            else {
                setJogadorDaVez('X')
                setStatus('Vez do jogador X')
            }
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
            <h2 id="status">{status}</h2>
        </>
    )
}
export default Velha;