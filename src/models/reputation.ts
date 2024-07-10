export interface ReputationItem {
    id: number
    name: string
    value: number
    img: string
}

export interface ReputationItemWithCount extends ReputationItem {
    count: number
}