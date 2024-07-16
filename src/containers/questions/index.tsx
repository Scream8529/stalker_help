import React, { FormEvent, FormEventHandler, useState } from 'react'
import style from "./styles.module.css";
import { questionsConst } from '../../constants/questions';
import { IQuest } from '../../models/quest';

const switchContsnts = [
    {
        value: 'search',
        name: 'Поиск',
    },
    {
        value: 'questions',
        name: 'Все вопросы',
    },
]

export default function QuestionsContainer() {
    const [state, setState] = useState(switchContsnts[0].value)
    const [search, setSearch] = useState('')
    const [searchResult, setSearchResult] = useState<IQuest[]>([])

    function onChangeSearchInput(e: any) { setSearch(e.target.value) }

    function toggleChangeSelect(e: any) {
        setState(e.target.value)
    }

    function searchSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        let result: IQuest[] = [];
        questionsConst.forEach(item => {
            if (item.quest.includes(search)) {
                result.push(item)
            }
        })
        setSearchResult(result)
    }

    return (
        <div className={style.container}>
            <div className={style.item_container}>
                <div>
                    <span>Показывать: </span>
                    <select value={state} onChange={toggleChangeSelect}>
                        {switchContsnts.map(item => <option value={item.value}>{item.name}</option>)}
                    </select>
                </div>
            </div>
            {state === 'search' &&
                <div >
                    <div className={`${style.item_container} ${style.questions__container}`}>
                        <form onSubmit={searchSubmit}>
                            <input value={search} onChange={onChangeSearchInput} />
                            <button type='submit'>Поиск</button>
                        </form>
                    </div>
                    <div>
                        {
                            searchResult.map(item => (
                                <div key={item.id} className={style.item_container}>
                                    <div>{item.quest}</div>
                                    <div>Ответ: <b>{item.answer}</b></div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            }
            {state === 'questions' && <div>
                {
                    questionsConst.map(item => (
                        <div key={item.id} className={style.item_container}>
                            <div>{item.quest}</div>
                            <div>Ответ: <b>{item.answer}</b></div>
                        </div>
                    ))
                }

            </div>}
        </div>
    )
}
