import Button from './ButtonComponent';

export default function NewPage() {
  const handleClick = () => {
    alert('Button clicked!');
  };
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to the New Page!</h1>
           <Button label="Sample Button Component" onClick={handleClick} />
        </header>
      </div>
    );
  }