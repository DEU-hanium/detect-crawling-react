# Description

A React Component for Crawling Detection based on URL and Mouse Position Information

## Installation

```bash
npm install detect-crawling-react
```

## Usage

```javascript
import DetectCrawlingReact from "detect-crawling-react";
function App() {
  // Define a function to execute when crawling is detected
  const callback = async () => {
    const response = await fetch("https://my-server");
    if (response.status === 200) {
      alert("crawling detected");
      window.location.href = "https://example.com";
    }
  };
  return (
    <div className="App">
      <DetectCrawlingReact callback={callback} />
      // Your Component
    </div>
  );
}
```
