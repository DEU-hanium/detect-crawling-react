# Description

This is the React Component for Detect Crawling

## Installation

```bash
npm install detect-crawling-react
```

## Usage

```javascript
import DetectCrawlingReact from "detect-crawling-react";
function App() {
  return (
    <div className="App">
      <DetectCrawlingReact backURL={"https://example.com/crawling"} />
      // Your Component
    </div>
  );
}
```

## Props

| Name    | Type   | Description                                                                |
| ------- | ------ | -------------------------------------------------------------------------- |
| backURL | string | When crawling is detected, your webSite will Request Get Method to backURL |

## License

[MIT](https://choosealicense.com/licenses/mit/)
