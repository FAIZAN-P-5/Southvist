import React from 'react';
import PropTypes from 'prop-types';

export const StateToggle = ({ value, onChange, options = ['All', 'Kerala', 'Tamil Nadu'] }) => {
  return (
    <div className="state-toggle" style={{ display: 'flex', gap: '0.5rem', background: 'var(--card-bg)', padding: '0.25rem', borderRadius: '9999px', border: '1px solid var(--border-color)' }}>
      {options.map(opt => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          style={{ 
            padding: '0.5rem 1rem', 
            borderRadius: '9999px',
            border: 'none',
            fontSize: '0.875rem',
            fontWeight: '600',
            cursor: 'pointer',
            backgroundColor: value === opt ? 'var(--teal)' : 'transparent',
            color: value === opt ? 'white' : 'var(--text-primary)',
            transition: 'all 0.3s'
          }}
        >
          {opt}
        </button>
      ))}
    </div>
  );
};

StateToggle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string)
};
