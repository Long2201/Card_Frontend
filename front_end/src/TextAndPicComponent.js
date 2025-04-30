// src/FeatureBox.jsx
import './FeatureBox.css';

export default function FeatureBox({ imageSrc, title, body, paragraph, linkText }) {
  return (
    <div className="feature-box">
      <img src={imageSrc} alt="Feature" className="feature-image" />
      <div className="feature-content">
        <h3>{title}</h3>
        <p>{body}</p>
        <p>{paragraph}</p>
        <a href="#">{linkText}</a>
      </div>
    </div>
  );
}
