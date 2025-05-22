import React, { useState } from 'react';

const FunctionalCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center">
      <h4 className="mb-3">Functional Counter</h4>

      <p className="fs-3 fw-bold text-success">
        Count: {count}
      </p>

      <div className="d-flex justify-content-center gap-3">
        <button className="btn btn-danger px-4" onClick={() => setCount(count - 1)}>
          –
        </button>
        <button className="btn btn-success px-4" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </div>
  );
};

export default FunctionalCounter;
