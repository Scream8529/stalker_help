import React, { ChangeEventHandler } from 'react'
import { ReputationItemWithCount } from '../../models/reputation'
import style from "./styles.module.css";

export default function ReputationItem(props: { item: ReputationItemWithCount, toggleChangeCount: (id: number, value: number) => void }) {
    function onChange(e: any) {
        props.toggleChangeCount(props.item.id, e.target.value)
    }

    return (
        <div className={style.container}>
            <div className={style.imgContainer}>
                <img width={100} height={100} className={style.image} src={props.item.img} />
            </div>
            <div>
                <h4>{props.item.name}</h4>
                <h5>Количество репы: {props.item.value}</h5>
                <div>
                    <input itemType='number' type='number' value={props.item.count} onChange={onChange} />
                </div>
            </div>

        </div>
    )
}
