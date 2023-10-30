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
    alert("Crawling Detected");
  };
  return (
    <div className="App">
      <DetectCrawlingReact callback={callback} />
      // Your Component
    </div>
  );
}
```
