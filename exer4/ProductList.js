import React, { useState, useEffect } from 'react';

export default function ProductList({ fetchProducts }) {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const pageSize = 5;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchProducts(page, pageSize).then(data => {
      setProducts(data);
      setLoading(false);
    });
  }, [page, fetchProducts]);

  return (
    <div>
      <button onClick={() => setPage(1)}>Reload</button>
      {loading ? (
        <p>Chargement...</p>
      ) : (
        <>
          <ul>
            {products.map(p => (
              <li key={p.id}>{p.name}</li>
            ))}
          </ul>
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>Précédent</button>
          <button onClick={() => setPage(page + 1)}>Suivant</button>
        </>
      )}
    </div>
  );
}
