import { useState, useMemo } from 'react';

export const useSearch = (itemList, filterKey) => {
  const [searchTerm, setSearchTerm] = useState('');

  const results = useMemo(() => {
    // Return all if search is empty or too short
    if (!searchTerm || searchTerm.length < 1) {
      return itemList;
    }

    const lowQuery = searchTerm.toLowerCase();
    
    return itemList.filter(entry => {
      const val = entry[filterKey];
      return val && val.toLowerCase().includes(lowQuery);
    });
  }, [itemList, searchTerm, filterKey]);

  return { 
    searchTerm, 
    setSearchTerm, 
    results 
  };
};
