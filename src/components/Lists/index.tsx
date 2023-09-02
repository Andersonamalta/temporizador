import { ITarefa } from '../types/tarefa';
import Item from './Item';
import style from './List.module.scss';


function Lista({tarefas}: {tarefas: ITarefa[]}) {

    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, i) =>(
                   <Item
                        key={i}
                        tarefa={item.tarefa}
                        tempo={item.tempo}
                   />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;