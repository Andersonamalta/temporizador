import Button from "../Button";
import Relogio from "./Clock";

export default function Cronometro (){
    return(
        <div>
            <p>Escolha um card e inicie o cronômetro</p>
            <div>
                <Relogio/>
            </div>
            <Button>
                Começar
            </Button>
        </div>
    )
} 