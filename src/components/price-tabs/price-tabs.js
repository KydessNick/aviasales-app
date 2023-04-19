import React from 'react'

import Tabs from '../tabs/tabs'

const PriceTabs = () => {
    const tabs = [
        { name: 'CHEAP', label: 'Самый дешевый' },
        { name: 'FAST', label: 'Самый быстрый' },
        { name: 'OPTIMAL', label: 'Оптимальный' },
    ]

    return <Tabs tabs={tabs} />
}

export default PriceTabs
