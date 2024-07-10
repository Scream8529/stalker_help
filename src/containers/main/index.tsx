import React, { useState } from "react";
import { ReputationConst } from "../../constants/reputations";
import ReputationItem from "../../components/reputation_item";
import { ReputationItemWithCount } from "../../models/reputation";

export default function KalkulatorContainer() {
    const [items, setItems] = useState<ReputationItemWithCount[]>(
        () => ReputationConst.map(item => ({ ...item, count: 0, }))
    )
    function toggleChangeCount(id: number, value: number) {
        setItems(prev => prev.map(item => {
            if (item.id === id) {
                return { ...item, count: value }
            }
            return item
        }))
    }
    function getTotalReputation() {
        let total = 0
        items.forEach(item => total = total + item.count * item.value)
        return total
    }

    return <div>
        {items.map(repItem => <ReputationItem key={repItem.id} item={repItem} toggleChangeCount={toggleChangeCount} />)}
        <div>
            <h3>Итого репутации: {getTotalReputation()}</h3>
        </div>
    </div>;
}
