import React, { useState } from "react";
import { ReputationConst } from "../../constants/reputations";
import ReputationItem from "../../components/reputation_item";
import { ReputationItemWithCount } from "../../models/reputation";
import Box from "@mui/material/Box";

export default function ReputationContainer() {
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

    return <>
        {items.map(repItem => <ReputationItem key={repItem.id} item={repItem} toggleChangeCount={toggleChangeCount} />)}
        <Box
            sx={{
                zIndex: 9999,
                width: "100%",
                padding: "20px 10px",
                backgroundColor: "antiquewhite",
                position: "fixed",
                bottom: "0",
            }}
        >
            <h3>Итого репутации: {getTotalReputation()}</h3>
        </Box>
    </ >;
}
