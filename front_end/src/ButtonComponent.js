export default function Button({ label, onClick }) {
    return (
      <button 
        onClick={onClick} 
        style={{ 
          padding: '10px 20px', 
          borderRadius: '8px', 
          border: 'none', 
          backgroundColor: '#007bff', 
          color: 'white', 
          cursor: 'pointer' 
        }}
      >
        {label}
      </button>
    );
  }