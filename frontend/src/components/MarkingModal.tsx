import React from 'react';

export default function MarkingModal({ marking, onClose }: any) {
  return (
    <div className='modal'>
      <h2>{marking.name}</h2>
      <p>{marking.description}</p>
      <p>Правило: {marking.ruleName}</p>
      {marking.ruleRef?.imageUrl && <img src={marking.ruleRef.imageUrl} alt='rule' />}
      <button onClick={onClose}>Close</button>
    </div>
  );
}

 