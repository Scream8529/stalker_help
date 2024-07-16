import React from 'react'
import { ReputationItemWithCount } from '../../models/reputation'
import style from "./styles.module.css";

export default function ReputationItem(props: { item: ReputationItemWithCount, toggleChangeCount: (id: number, value: number) => void }) {
    function onChange(e: any) {
        props.toggleChangeCount(props.item.id, e.target.value)
    }
    function buttonClick(e: number) {
        return () => {
            props.toggleChangeCount(props.item.id, props.item.count + e)
        }
    }

    return (
        <div className={style.container}>
            <div className={style.imgContainer}>
                <img width={45} height={45} className={style.image} src={props.item.img} />
            </div>
            <div>
                <h4>{props.item.name}</h4>
                <h5>Количество репы: {props.item.value}</h5>
                <div>
                    <button className={style.button} onClick={buttonClick(-1)}>-1</button>
                    <button className={style.button} onClick={buttonClick(-5)}>-5</button>
                    <button className={style.button} onClick={buttonClick(-10)}>-10</button>
                    <input itemType='number' type='number' value={props.item.count} onChange={onChange} className={style.input} />
                    <button className={style.button} onClick={buttonClick(+1)}>+1</button>
                    <button className={style.button} onClick={buttonClick(+5)}>+5</button>
                    <button className={style.button} onClick={buttonClick(+10)}>+10</button>
                </div>
            </div>

        </div>
    )
}
