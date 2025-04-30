import Button from './ButtonComponent';
import FeatureBox from './TextAndPicComponent';
import exampleImage from './cat.jpg';
import {useNavigate} from 'react-router-dom';


export default function NewPage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/'); // Navigate to new page
  };
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to the New Page!</h1>
           <Button label="Sample Button Component" onClick={handleClick} />
           <FeatureBox
            imageSrc={exampleImage}
            title="What Our Website can do ?"
            body="Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look:"
            paragraph="Excepteur efficient emerging, minim veniam anim aute carefully curated... [etc.]"
          />
        </header>
      </div>
    );
  }