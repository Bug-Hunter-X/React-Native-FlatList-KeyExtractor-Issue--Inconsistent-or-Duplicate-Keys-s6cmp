To fix this, always use a unique key for each item.  If your data doesn't have a unique identifier, generate one.  Here's an improved example using a UUID:

```javascript
import { v4 as uuidv4 } from 'uuid';

const data = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 1, name: 'Item 3' }
];

const updatedData = data.map((item) => ({ ...item, uniqueId: uuidv4() }));

<FlatList
  data={updatedData}
  renderItem={({ item }) => <Text>{item.name}</Text>}
  keyExtractor={(item) => item.uniqueId} 
/>
```

Now, each item has a unique `uniqueId`, and the `keyExtractor` uses this to reliably identify each item, preventing the rendering issues.  Alternatively, you could generate a unique key within the data itself based on other fields if those are always unique and sufficient.  Using a robust key generation approach will greatly enhance the reliability and stability of your React Native lists.