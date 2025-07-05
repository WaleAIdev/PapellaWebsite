import { useState, useEffect } from 'react';
import Papa from 'papaparse';

export function useMenuData() {
  const [menuSections, setMenuSections] = useState([]);

  useEffect(() => {
    const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRmEPd7T3fR7U9CAkTux5hG3O7KY6gWKQLbtnXOmm0Y9ZKJjEncmuLnov1D6f6O4UrZ5pTnnqZs97eQ/pub?output=csv';
    Papa.parse(csvUrl, {
      download: true,
      header: true,
      complete: (results) => {
        // Group by Category
        const groups = {};
        results.data.forEach(row => {
          if (!groups[row.Category]) groups[row.Category] = [];
          groups[row.Category].push({
            name: row.Name,
            desc: row.Description,
            price: `€${row.Price}`,
            image: row.ImageURL,
          });
        });
        setMenuSections(
          Object.entries(groups).map(([title, items]) => ({ title, items }))
        );
      }
    });
  }, []);

  return menuSections;
}
