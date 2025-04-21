import Menu from '../commonComponents/Menu';

import { useState } from 'react';

function KnowledgeHorror() {
  const [category, setCategory] = useState('knowledge');
  return (
    <div>
      <Menu/>
      <h1>{category}</h1>
      <p>This is the {category} page.</p>
    </div>
  );
}

export default KnowledgeHorror;