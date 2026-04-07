import { useState, useMemo, useEffect } from 'react';

export const useStateFilter = (dataItems, defaultOption = 'All') => {
  // trackedSelection keeps the current category active
  const [activeTab, setActiveTab] = useState(defaultOption);

  useEffect(() => {
    // Keep internal state in sync with external prop
    setActiveTab(defaultOption);
  }, [defaultOption]);

  const filtered = useMemo(() => {
    // console.log("Filtering items for:", activeTab); 
    if (activeTab === 'All') return dataItems;
    
    return dataItems.filter(entry => entry.originState === activeTab);
  }, [dataItems, activeTab]);

  return { 
    filter: activeTab, 
    setFilter: setActiveTab, 
    filteredItems: filtered 
  };
};
